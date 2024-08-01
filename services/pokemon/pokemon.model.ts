export type PokemonApiResponse = {
    count: number; // Total number of Pokemon
    next: string | null; // URL for the next page of results (null if no next page)
    previous: string | null; // URL for the previous page of results (null if no previous page)
    results: PokemonSummary[]; // Array of Pokemon summaries
  }
  
  export type PokemonSummary = {
    name: string; // Name of the Pokemon
    url: string; // URL for the detailed information of the Pokemon
  }