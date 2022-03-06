import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../common/keys/movieApiKey";


const initialMoviesState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
};

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "Harry";
    const response = await fetch(
        `${BASE_URL}=${API_KEY}&s=${movieText}&type=movie`
    );

    const data = await response.json();
    if (data.Response === "False" || data.Error) {
        throw new Error(
            "Ooops, something went wrong while trying to get the data!"
        );
    }
    return data.Search;

});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const seriesText = "Friends";
    const response = await fetch(
        `${BASE_URL}=${API_KEY}&s=${seriesText}&type=series`
    );

    const data = await response.json();
    if (data.Response === "False" || data.Error) {
        throw new Error(
            "Ooops, something went wrong while trying to get the data!"
        );
    }
    return data.Search;

});


export const fetchAsyncMovieOrShowByID = createAsyncThunk('movies/fetchAsyncMovieOrShowByID',
    async (imdbID) => {
        const response = await fetch(
            `${BASE_URL}=${API_KEY}&i=${imdbID}&Plot=full`
        );

        const data = await response.json();
        return data;
    })

const movieSlice = createSlice({
    name: 'movies',
    initialState: initialMoviesState,
    reducers: {
        // clean-up function used in movieDetails useEffect;
        removeSelectedMoviedOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            console.log('Fetched Successfully!');
            console.log('payload fullfilled', action.payload);
            return { ...state, movies: action.payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected!');
        },
        [fetchAsyncShows.fulfilled]: (state, action) => {
            console.log('Fetched Successfully!');
            return { ...state, shows: action.payload }
        },
        [fetchAsyncMovieOrShowByID.fulfilled]: (state, action) => {
            console.log('Fetched Successfully!');
            return { ...state, selectedMovieOrShow: action.payload }
        }
    }
})


export const movieActions = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetailsById = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;