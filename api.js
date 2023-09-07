
async function fetchPokemon(pokemon){
  try {

  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  if(!response.ok){
    throw new Error(`Failed to fetch Pokemon: ${response.status}`)
  }
  const data = await response.json()

  return {
    name: data.name,
    id : data.id,
    height: data.height,
    weight: data.weight,
    types: data.types.map((type) => type.type.name),
  }
  } catch(error){
    throw error

  }
}



module.exports = {fetchPokemon}