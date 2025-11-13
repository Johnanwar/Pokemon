type PokemonErrorProps = {
  error: Error;
  onRetry: () => void;
};

export const PokemonError = ({ error, onRetry }: PokemonErrorProps) => {
  return (
    <div 
      className="text-center text-red-500 mb-4" 
      role="alert"
      aria-live="polite"
    >
      <p className="mb-2">{error.message}</p>
      <button 
        onClick={onRetry} 
        className="underline text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
        aria-label="Retry loading Pokémon data"
      >
        Retry
      </button>
    </div>
  );
};

