import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { formatPokemonId } from '../../utils/pokemon';

type Props = {
  name: string;
  imageUrl: string;
  id: number;
};

const PokemonCard: React.FC<Props> = ({ name, imageUrl, id }) => {
  const formattedId = formatPokemonId(id);
  
  return (
    <article>
      <Link
        to={`/pokemon/${id}`}
        className="block rounded-lg shadow-sm bg-white p-4 border border-gray-200 text-center hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        aria-label={`View details for ${name}, ${formattedId}`}
      >
        <div className="bg-gray-100" aria-hidden="true">
          <img 
            src={imageUrl} 
            alt={`${name} sprite`}
            className="w-30 h-30 mx-auto mb-2 rounded-full" 
            loading="lazy"
            width="120"
            height="120"
          />
        </div>
        <h2 className="capitalize font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{formattedId}</p>
      </Link>
    </article>
  );
};

export default memo(PokemonCard);
