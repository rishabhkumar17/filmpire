import { Box, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { useGetMovieQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

function MovieInformation() {
  const classes = useStyles();
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const dispatch = useDispatch();

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
          <Grid item className={classes.genresContainer}>
            {data?.genres?.map((genre) => (
              <Link
                key={genre.name}
                className={classes.links}
                to="/"
                onClick={() => dispatch(selectGenreOrCategory(genre.id))}
              >
                <img
                  src={genreIcons[genre.name.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
                <Typography color="textPrimary" variant="subtitle1">
                  {genre?.name}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
            Overview
          </Typography>
          <Typography style={{ marginBottom: '2rem' }}>
            {data?.overview}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Top Cast
          </Typography>
          <Grid item container spacing={2}>
            {data &&
              data.credits?.cast
                .map(
                  (character, i) =>
                    character.profile_path && (
                      <Grid
                        key={i}
                        item
                        xs={4}
                        md={2}
                        component={Link}
                        to={`/actors/${character.id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <img
                          className={classes.castImage}
                          src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                          alt={character.name}
                        />
                        <Typography color="textPrimary">
                          {character?.name}
                        </Typography>
                        <Typography color="textSecondary">
                          {character.character.split('/')[0]}
                        </Typography>
                      </Grid>
                    )
                )
                .slice(0, 6)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieInformation;
