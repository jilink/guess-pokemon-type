const TOTAL_POKEMONS = 800;

const getRandomPokemon = () => {
  const randomIndex = Math.floor(Math.random() * TOTAL_POKEMONS);
  return fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
    .then(response => response.json())
}

const getAllPokemonTypes = () => {
  return fetch(`https://pokeapi.co/api/v2/type`)
    .then(response => response.json())

}

export { getRandomPokemon };