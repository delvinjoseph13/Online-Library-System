import { createSlice } from "@reduxjs/toolkit";
import { book } from "./mockData";

const bookSlice=createSlice({
    name:"books",
    initialState:{
        items:book || []
    },
    reducers:{
        addBook:(state,action)=>{
            state.items.push(action.payload);
        }
    }
})

export const {addBook}=bookSlice.actions;
export default bookSlice.reducer