const { fetchPokemon } = require("./api")


class Pokédex{
    constructor(){
        this.pokeball = []
    }

    catch(pokemonName){
        const pokemon =  fetchPokemon(pokemonName)
        return this.pokeball.concat(pokemon)

    }
    all(){
        return this.pokeball
    }
}
module.exports = Pokédex