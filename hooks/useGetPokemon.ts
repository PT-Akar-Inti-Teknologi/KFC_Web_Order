import { PokemonApiResponse } from "@/services/pokemon/pokemon.model";
import { getPokemon } from "@/services/pokemon/pokemon.services";
import { FetchQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const getPokemonOption: FetchQueryOptions<PokemonApiResponse> = {
  queryKey: ["pokemon"],
  queryFn: getPokemon,
}

export function useGetPokemon() {
  return useSuspenseQuery(getPokemonOption);
}
