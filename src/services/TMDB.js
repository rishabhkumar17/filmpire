/* eslint-disable operator-linebreak */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // GET GENRES
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    // GET MOVIES BY [TYPE]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // GET MOVIES BY CATEGORY
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'string'
        ) {
          return `movie/${genreIdOrCategoryName}?api_key=${tmdbApiKey}&page=${page}`;
        }

        // GET MOVIES BY GENRE
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'number'
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}?api_key=${tmdbApiKey}&page=${page}`;
        }

        // GET POPULAR MOVIES
        return `movie/popular?api_key=${tmdbApiKey}&page=${page}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
