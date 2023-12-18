import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies:null,
    },
    reducers: {
        addNowPalyingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        }
    },
})
export const {addNowPalyingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;