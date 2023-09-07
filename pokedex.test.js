const Pokédex = require('./pokedex.js')
const { fetchPokemon } = require('./api.js'); 
describe('Pokédex', () => {
    test('return empty array', () => {  
        const pokedex = new Pokédex();
        expect(pokedex.all()).toEqual([]);
    });
})  

describe('Pokédex catch method', () => {
    
    test('add Pokémon to the Pokédex', () => {
        const pokedex = new Pokédex();    
        pokedex.catch('charmander');
    
        expect(pokedex.all()).toBe(['charmander']);
      });
})  