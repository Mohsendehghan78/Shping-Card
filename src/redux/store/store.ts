import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "../card-slice/cardSlice";
 
export const Store= configureStore({
   reducer:{
    card:cardSlice.reducer
   }

})