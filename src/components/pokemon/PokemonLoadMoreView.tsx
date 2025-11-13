import { useInfinitePokemon } from "../../hooks/useInfinitePokemon";
import { PokemonGrid } from "./PokemonGrid";
import { PokemonError } from "./PokemonError";
import Loader from "../Loader";

export default function LoadMoreView() {
  const { allData, hasMore, isLoading, error, loadMore, refetch } = useInfinitePokemon();

  const handleLoadMore = () => {
    loadMore();
  };

  const handleRetry = () => {
    refetch();
  };

  return (
    <div>
      {error && <PokemonError error={error} onRetry={handleRetry} />}

      <PokemonGrid results={allData} />

      {isLoading && (
        <div className="flex justify-center mb-4" role="status" aria-live="polite">
          <Loader />
        </div>
      )}

      {hasMore && !isLoading && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 cursor-pointer rounded-lg font-medium shadow-md bg-yellow-400 text-white hover:bg-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            aria-label="Load more Pokémon"
          >
            Load More
          </button>
        </div>
      )}

      {!hasMore && (
        <p className="text-center text-sm text-gray-400 mt-4" role="status" aria-live="polite">
          You've reached the end!
        </p>
      )}
    </div>
  );
}
