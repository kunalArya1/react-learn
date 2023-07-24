"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment , decrement} from "@/store/reducers/counterReducer";

const HomePage = () => {
 const {value} = useSelector((state) => state.counterReducer );
 const dispatch = useDispatch();
 
 const incrementHandlaer = () =>{
//   console.log("Increment by 1");
    dispatch(increment(1));
 }; 

 const decrementHandlaer = () =>{
   //  console.log("Decerement by 1");
    dispatch(decrement(1));
    
 }

 const incrementBy5  = () =>{
   console.log("kuch hua");
   // dispatch(incrementBy5());
 }
  return <div className="container">
      <h1 className="content">HomePage</h1>
      <h2 className="content">{value}</h2>
      <button className="button" onClick={incrementHandlaer}>Increment by 1</button>
      <button  className="button" onClick={decrementHandlaer}>Decerement by 1</button>
      <button  onClick={incrementBy5} className="button">Increment by 5</button>


  </div>;
};

export default HomePage;
