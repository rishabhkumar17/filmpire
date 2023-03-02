import React from 'react';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

function Movies() {
  const { data } = useGetMoviesQuery();

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
