import {useState} from "react";
import Pokemon from "~/components/Pokemon";
import {Flex, Text, Button} from "@chakra-ui/react";

const Types = ({types, pokemon}) => {
  // console.log("pokemon types", pokemon.types[0].type.name);
  const [clickedTypes, setClickedTypes] = useState(types);

  const isPokemonType = (type) => {
    return pokemon.types.some(pokemonType => pokemonType.type.name === type);
  };
  const handleClick = (type) => {
    const tmpTypes = {...clickedTypes};
    tmpTypes[type].isClicked = true;
    tmpTypes[type].isCorrect = isPokemonType(type);
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
        <Button colorScheme={isClicked(type) ? isCorrect(type) ? "green" : "red" : "teal"} onClick={() => handleClick(type)} key={type}>
          {type}
        </Button>
      ))}
    </Flex>
  );
};


const Game = ({pokemon, types}) => {
  const typesToDict = (types) => {
    return types.reduce((acc, type) => {
      acc[type.name] = {isClicked: false, isCorrect: false};
      return acc;
    }, {});
  };

  return (
    <>
      <Pokemon pokemon={pokemon} />
      <Types types={typesToDict(types)} pokemon={pokemon}/>
    </>
  );
};

export default Game;
