import { ITEMS_PER_PAGE } from '../../constants/pokemon';

type PokemonSkeletonProps = {
  count?: number;
};

export const PokemonSkeleton = ({ count = ITEMS_PER_PAGE }: PokemonSkeletonProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="p-4 border rounded shadow-sm">
          <div className="w-20 h-20 mx-auto mb-2 skeleton" />
          <div className="h-4 w-3/4 mx-auto skeleton" />
        </div>
      ))}
    </div>
  );
};

