import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies:null,
        trailerVideo:null,
        PopularMovies:null,
    },
    reducers: {
        addNowPalyingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
    },
})
export const {addNowPalyingMovies,addTrailerVideo,addPopularMovies}=moviesSlice.actions;
export default moviesSlice.reducer;