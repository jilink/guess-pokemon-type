import { Link, Outlet, useLoaderData } from "remix";
import {getRandomPokemon } from "~/pokemons"


import { ChakraProvider, Text } from '@chakra-ui/react'

export const loader = async () => {
 return getRandomPokemon();
};

export default function App() {
  const pokemon = useLoaderData();
    console.log(pokemon);
  return (
    <div>
      <ChakraProvider>
        <Text fontSize="4xl" textAlign="center">
          Guess the pokemon type!
        </Text>
          <Text key={pokemon.name}>{pokemon.name}</Text>
        <Outlet />
      </ChakraProvider>
    </div>
  );
}