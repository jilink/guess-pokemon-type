import { useState, useEffect } from "react";
import Pokemon from "~/components/Pokemon";
import { Flex, Text, Button } from "@chakra-ui/react";

const Types = ({ types, pokemon, setMistakes }) => {
  const [clickedTypes, setClickedTypes] = useState(types);

  const isPokemonType = (type) => {
    return pokemon.types.some((pokemonType) => pokemonType.type.name === type);
  };

  const clickedAllCorrect = (tmpTypes) => {
    return (
      Object.keys(tmpTypes).filter(
        (type) => isClicked(type) && isPokemonType(type)
      ).length === pokemon.types.length
    );
  };
  const handleClick = (type) => {
    const tmpTypes = { ...clickedTypes };
    tmpTypes[type].isClicked = true;
    isPokemonType(type)
      ? (tmpTypes[type].isCorrect = true)
      : setMistakes((mistakes) => mistakes + 1);
    tmpTypes[type].isCorrect = isPokemonType(type);
    if (clickedAllCorrect(tmpTypes)) {
      Object.keys(tmpTypes).forEach((type) => {
        tmpTypes[type].isClicked = true;
      });
    }
    setClickedTypes(tmpTypes);
  };

  const isClicked = (type) => {
    return clickedTypes[type].isClicked;
  };
  const isCorrect = (type) => {
    return clickedTypes[type].isCorrect;
  };

  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      flexWrap="wrap"
    >
      {Object.keys(clickedTypes).map((type) => (
        <Button
          minW={{ base: "30%", md: "20%" }}
          cursor={isClicked(type) ? "initial" : "pointer"}
          m={5}
          colorScheme={
            isClicked(type) ? (isCorrect(type) ? "green" : "red") : "teal"
          }
          onClick={isClicked(type) ? null : () => handleClick(type)}
          key={type}
        >
          {type}
        </Button>
      ))}
    </Flex>
  );
};

const Game = ({ pokemon, types }) => {
  const [mistakes, setMistakes] = useState(0);
  const typesToDict = (types) => {
    return types.reduce((acc, type) => {
      acc[type.name] = { isClicked: false, isCorrect: false };
      return acc;
    }, {});
  };

  return (
    <>
      <Text align="center">Mistakes: {mistakes}</Text>
      <Pokemon pokemon={pokemon} />
      <Types
        types={typesToDict(types)}
        pokemon={pokemon}
        setMistakes={setMistakes}
      />
    </>
  );
};

export default Game;
