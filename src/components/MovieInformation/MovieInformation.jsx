import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/TMDB';

function MovieInformation() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  return <div>MovieInformation {id}</div>;
}

export default MovieInformation;
