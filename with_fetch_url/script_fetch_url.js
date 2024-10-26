async function fetchPokedex() {
  const pokedexUrl =
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
  const response = await fetch(pokedexUrl).catch((err) => {
    console.error(err);
  });

  const data = await response.json();
  const pokedex = data;

  console.log("😈", pokedex);

  const numberPokemon = pokedex.pokemon.length;
  console.log("Nombre de Pokemon", numberPokemon);

  const pokemonNames = pokedex.pokemon.map((elm) => elm.name);
  console.log("Nom de Pokemon", pokemonNames);
  
}

fetchPokedex();
