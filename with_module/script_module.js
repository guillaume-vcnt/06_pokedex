import { pokedex } from "../with_module/pokedex.js";
console.log(pokedex);

const numberPokemon = pokedex.pokemon.length;
console.log("Nombre de Pokemon", numberPokemon);

const pokemonNames = pokedex.pokemon.map((elm) => elm.name);
console.log("Noms des Pokemon:", pokemonNames);