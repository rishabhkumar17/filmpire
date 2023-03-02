import { Grid, Grow, Typography } from '@mui/material';
import React from 'react';

import useStyles from './styles';

function Movie({ movie, i }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Typography className={classes.title} variant="h5">
          {movie.title}
        </Typography>
      </Grow>
    </Grid>
  );
}

export default Movie;
