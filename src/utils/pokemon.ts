import type { PokemonListItem } from '../api/pokemon';

export const getIdFromUrl = (url: string): number => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? Number(match[1]) : 0;
};

export const getPokemonImageUrl = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const formatPokemonId = (id: number): string => {
  return `#${String(id).padStart(3, '0')}`;
};

export const formatHeight = (height: number): string => {
  return `${height / 10} m`;
};

export const formatWeight = (weight: number): string => {
  return `${weight / 10} kg`;
};

export const getPokemonId = (pokemon: PokemonListItem): number => {
  return getIdFromUrl(pokemon.url);
};

