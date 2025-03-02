async function loadPokedex() {
  const response = await fetch("pokedex_database.json");
  const data = await response.json();
  console.log("Objet JSON", data);

  const pokedex = data.pokemonList;
  console.log("Pokedex 😈", pokedex);

  const totalNumberPokemon = pokedex.length;
  console.log("Nombre de Pokemon :", totalNumberPokemon);

  const namePokemon = pokedex.map((pokemon) => pokemon.name);
  console.log("Nom des pokemon :", namePokemon);

  //const randomIndex = Math.floor(Math.random() * 152); (Non dynamique)
  const randomIndex = Math.floor(Math.random() * pokedex.length);
  const randomPokemon = pokedex[randomIndex];
  console.log("🎲 Pokemon aléatoire :", randomPokemon.name);

  const firePokemon = pokedex.filter((pokemon) =>
    pokemon.type.includes("Fire")
  );
  console.log("🔥Pokemon type feu :", firePokemon);

  const waterPokemon = pokedex.find((pokemon) => pokemon.type.includes("Water"))
  console.log("🐟 Pokemon type water :", waterPokemon);

  const weightPokemon = pokedex.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight))
  console.log("Pokemon du plus léger au plus lourd :", weightPokemon );
}

loadPokedex();
