import { Link, Outlet, useLoaderData } from "remix";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { getRandomPokemon } from "~/pokemons";
import Game from "~/components/Game";

export const loader = async () => {
  return getRandomPokemon();
};

export default function App() {
  const pokemon = useLoaderData();
  return (
    <div>
      <ChakraProvider>
        <Text fontSize="4xl" textAlign="center">
          Guess the pokemon type!
        </Text>
        <Game pokemon={pokemon} />
        <Outlet />
      </ChakraProvider>
    </div>
  );
}
