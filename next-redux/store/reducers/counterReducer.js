import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment:(state,action)=>{
        // console.log(action);
        state.value += action.payload;
    },
    decrement :(state,action) =>{
        // console.log(action);
        state.value -= action.payload;
    },
    incrementBy5:(dispatch,getState) =>{
        
    }
  },
});
export const { increment ,decrement} = counterReducer.actions;

export default counterReducer.reducer;
