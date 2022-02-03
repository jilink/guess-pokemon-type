import {Text, Image, Flex} from "@chakra-ui/react";

const Pokemon = ({pokemon}) => {
  return (
    <Flex direction="column" align="center">
      <Image src={pokemon.sprites.front_default} />
      <Text>{pokemon.name}</Text>
    </Flex>
  );
};

export default Pokemon;
