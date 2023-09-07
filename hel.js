const readline = require('readline');
const { fetchPokemon } = require('./api.js'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a Pokémon name: ', async (pokemonName) => {
  try {
    const pokemonData = await fetchPokemon(pokemonName);
    console.log('Pokémon data:', pokemonData);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
});