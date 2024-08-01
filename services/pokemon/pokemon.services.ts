"use server";
export async function getPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  return response.json();
}
