import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[],
    totalQuantity:0,
    totalPrice:0,
}

export const cartSlice=createSlice((
    name:"cart",
    initialState,
    reducers:{},
))