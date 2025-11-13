import { useEffect, useState } from 'react';
import { usePokemonPage } from '../api/pokemon';
import type { PokemonListItem } from '../api/pokemon';
import { ITEMS_PER_PAGE } from '../constants/pokemon';

type UseInfinitePokemonReturn = {
  allData: PokemonListItem[];
  hasMore: boolean;
  isLoading: boolean;
  error: Error | null;
  loadMore: () => void;
  refetch: () => void;
};

export const useInfinitePokemon = (): UseInfinitePokemonReturn => {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState<PokemonListItem[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isLoading, error, refetch } = usePokemonPage(page, ITEMS_PER_PAGE);

  useEffect(() => {
    if (data?.results.length) {
      setAllData((prev) => [...prev, ...data.results]);
      setHasMore(!!data.next);
    }
  }, [data]);

  const loadMore = () => {
    setPage((p) => p + 1);
  };

  return {
    allData,
    hasMore,
    isLoading,
    error: error as Error | null,
    loadMore,
    refetch,
  };
};

