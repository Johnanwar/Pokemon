import { useMemo } from 'react';
import type { PokemonListItem } from '../api/pokemon';
import { getPokemonId, getPokemonImageUrl } from '../utils/pokemon';

export const usePokemonListData = (results: PokemonListItem[] | undefined) => {
  return useMemo(() => {
    if (!results) return [];
    
    return results.map((pokemon) => {
      const id = getPokemonId(pokemon);
      return {
        ...pokemon,
        id,
        imageUrl: getPokemonImageUrl(id),
      };
    });
  }, [results]);
};

