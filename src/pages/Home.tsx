import {  lazy, useState } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";

const PaginationView = lazy(() => import('../components/pokemon/PokemonPaginationView'));
const LoadMoreView = lazy(() => import('../components/pokemon/PokemonLoadMoreView'));
 
    

const Browser = () => {
  const [mode, setMode] = useState<"pagination" | "loadmore">("pagination");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-1">⚡ Pokédex</h1>
          <p className="text-gray-600">
            Discover and explore Pokémon with page controls
          </p>

          <div className="mt-6 flex justify-center gap-4" role="tablist" aria-label="View mode selection">
            <button
              id="tab-pagination"
              onClick={() => setMode("pagination")}
              role="tab"
              aria-selected={mode === "pagination"}
              aria-controls="pokemon-view"
              className={`px-6 py-3 rounded-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
                mode === "pagination"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              Page Controls
            </button>

            <button
              id="tab-loadmore"
              onClick={() => setMode("loadmore")}
              role="tab"
              aria-selected={mode === "loadmore"}
              aria-controls="pokemon-view"
              className={`px-6 py-3 rounded-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
                mode === "loadmore"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              Infinite Scroll
            </button>
          </div>
        </div>

        <ErrorBoundary>
          <div id="pokemon-view" role="tabpanel" aria-labelledby={`tab-${mode}`}>
            {mode === "pagination" ? <PaginationView /> : <LoadMoreView />}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Browser;
