import { Link, Outlet, useLoaderData } from "remix";
import { ChakraProvider, Text, Box } from "@chakra-ui/react";
import { getRandomPokemon, getAllPokemonTypes } from "~/pokemons";
import Game from "~/components/Game";

export const loader = async () => {
  const pokemon = await getRandomPokemon();
  const types = await getAllPokemonTypes();
  return [pokemon, types.results];
};

export default function App() {
  const [pokemon, types] = useLoaderData();
  return (
    <div>
      <ChakraProvider>
      <Box p={5}>
        <Text fontSize="4xl" textAlign="center">
          Guess the pokemon type!
        </Text>
        <Game pokemon={pokemon} types={types}/>
        </Box>
        <Outlet />
      </ChakraProvider>
    </div>
  );
}
