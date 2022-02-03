import { Link, Outlet } from "remix";

import { ChakraProvider, Text } from '@chakra-ui/react'

export default function App() {
  return (
    <div>
      <ChakraProvider>
        <Text fontSize="4xl" textAlign="center">Guess the pokemon type!</Text>
        <Outlet />
      </ChakraProvider>
    </div>
  );
}