import { Box, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useStyles from './styles';
import { useGetMovieQuery } from '../../services/TMDB';

function MovieInformation() {
  const classes = useStyles();
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

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sx={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Grid item>
          <Typography variant="h3" align="center" gutterBottom>
            {data?.title} ({data.release_date.split('-')[0]})
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            {data?.tagline}
          </Typography>
          <Grid item className={classes.containerSpaceAround}>
            <Box display="flex" align="center">
              <Rating readOnly value={data.vote_average / 2} />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ marginLeft: '10px' }}
              >
                {data?.vote_average} / 10
              </Typography>
            </Box>
            <Typography variant="h5" align="center" gutterBottom>
              {data?.runtime}min /{' '}
              {data?.spoken_languages.length > 0
                ? data?.spoken_languages[0].name
                : ''}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieInformation;
