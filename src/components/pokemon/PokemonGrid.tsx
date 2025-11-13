import { memo } from 'react';
import type { PokemonListItem } from '../../api/pokemon';
import { usePokemonListData } from '../../hooks/usePokemonList';
import PokemonCard from './PokemonCard';

type PokemonGridProps = {
  results: PokemonListItem[] | undefined;
};

export const PokemonGrid = memo(({ results }: PokemonGridProps) => {
  const pokemonList = usePokemonListData(results);

  if (pokemonList.length === 0) {
    return (
      <div role="status" aria-live="polite" className="text-center text-gray-500 py-8">
        <p>No Pokémon found.</p>
      </div>
    );
  }

  return (
    <section 
      className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-6"
      aria-label="Pokémon list"
    >
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={`${pokemon.name}-${pokemon.id}`}
          name={pokemon.name}
          id={pokemon.id}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </section>
  );
});

