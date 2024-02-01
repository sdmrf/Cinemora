import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
        movies: {},
        series: {},
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSeries: (state, action) => {
            state.series = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        }
    },
});

export const { setMovies, setSeries, setUrl, setGenres } = homeSlice.actions;
export default homeSlice.reducer