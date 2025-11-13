import { useState, useMemo } from "react";
import { usePokemonPage } from "../../api/pokemon";
import { ITEMS_PER_PAGE } from "../../constants/pokemon";
import { PokemonGrid } from "./PokemonGrid";
import { PokemonSkeleton } from "./PokemonSkeleton";
import { PokemonError } from "./PokemonError";

export default function PaginationView() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, refetch } = usePokemonPage(page, ITEMS_PER_PAGE);

  const totalPages = useMemo(() => {
    return data ? Math.ceil(data.count / ITEMS_PER_PAGE) : 0;
  }, [data]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
      .slice(Math.max(0, page - 3), page + 2);
  }, [totalPages, page]);

  const handlePrevious = () => {
    setPage((p) => Math.max(1, p - 1));
  };

  const handleNext = () => {
    setPage((p) => Math.min(totalPages, p + 1));
  };

  const handlePageClick = (p: number) => {
    setPage(p);
  };

  const handleRetry = () => {
    refetch();
  };

  return (
    <div>
      {error && <PokemonError error={error as Error} onRetry={handleRetry} />}
      
      {isLoading && <PokemonSkeleton />}

      {!isLoading && <PokemonGrid results={data?.results} />}

      <nav 
        className="flex flex-wrap justify-center items-center gap-2"
        aria-label="Pagination navigation"
      >
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="px-3 py-1 border rounded-lg border-gray-200 disabled:opacity-40 bg-white hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          aria-label="Go to previous page"
          aria-disabled={page === 1}
        >
          Previous
        </button>

        {pageNumbers.map((p) => (
          <button
            key={p}
            onClick={() => handlePageClick(p)}
            className={`px-3 py-1 rounded-lg border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
              p === page
                ? "bg-yellow-400 text-white font-bold"
                : "bg-white hover:bg-gray-100"
            }`}
            aria-label={`Go to page ${p}`}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded-lg border-gray-200 disabled:opacity-40 bg-white hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          aria-label="Go to next page"
          aria-disabled={page === totalPages}
        >
          Next
        </button>
      </nav>

      <p className="mt-4 text-center text-gray-500 text-sm" aria-live="polite">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}

