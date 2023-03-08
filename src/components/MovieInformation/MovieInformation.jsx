import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/TMDB';

function MovieInformation() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }

  return <div>MovieInformation {id}</div>;
}

export default MovieInformation;
