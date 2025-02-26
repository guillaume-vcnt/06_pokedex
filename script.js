async function loadPokedexData() {
  const response = await fetch("pokedex.json"); 
  const data = await response.json(); 
  const pokedex = data; 

  console.log("😈", pokedex);

  const numberPokemon = pokedex.pokemon_list.length;
  console.log("Nombre de Pokemon", numberPokemon);

  const pokemonNames = pokedex.pokemon_list.map((pokemon) => pokemon.name);
  console.log("Nom de Pokemon", pokemonNames);
}

loadPokedexData();
