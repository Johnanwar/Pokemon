
import { useQuery } from '@tanstack/react-query';
import { QUERY_STALE_TIME } from '../constants/pokemon';

const API_BASE = import.meta.env.VITE_POKEMON_API || 'https://pokeapi.co/api/v2';

export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  base_experience: number;
  stats: { base_stat: number; stat: { name: string } }[];
};

async function fetcher<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Pokémon not found');
      }
      if (res.status >= 500) {
        throw new Error('Server error. Please try again later.');
      }
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error. Please check your connection.');
  }
}

export function usePokemonPage(page: number, limit = 10) {
  const offset = (page - 1) * limit;
  const url = `${API_BASE}/pokemon?limit=${limit}&offset=${offset}`;
  return useQuery({
    queryKey: ['pokemonList', page, limit],
    queryFn: () => fetcher<PokemonListResponse>(url),
    staleTime: QUERY_STALE_TIME.LIST,
  });
}

export function usePokemonDetails(id: number) {
  return useQuery({
    queryKey: ['pokemonDetails', id],
    queryFn: () => fetcher<PokemonDetails>(`${API_BASE}/pokemon/${id}`),
    staleTime: QUERY_STALE_TIME.DETAILS,
  });
}
