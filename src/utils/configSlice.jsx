import { createSlice } from "@reduxjs/toolkit";


const configSlice=createSlice(({
    name:"config",
    initialState:{
        language:"en",
    },
    reducers:{
        changeLanguages:(state,action)=>{
            state.language=action.payload;
        }
    }
}))

export const {changeLanguages}=configSlice.actions;
export default configSlice.reducer;