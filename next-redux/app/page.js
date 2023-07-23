"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment , decrement} from "@/store/reducers/counterReducer";

const HomePage = () => {
 const {value} = useSelector((state) => state.counterReducer );
 const dispatch = useDispatch();
 
 const incrementHandlaer = () =>{
  console.log("Increment by 1");
    dispatch(increment(1));
 }; 

 const decrementHandlaer = () =>{
    console.log("Decerement by 1");
    dispatch(decrement(1));
    
 }
  return <div>
      <h1>HomePage</h1>
      <h2>{value}</h2>
      <button  onClick={incrementHandlaer}>Increment by 1</button>
      <button onClick={decrementHandlaer}>Decerement by 1</button>

  </div>;
};

export default HomePage;
