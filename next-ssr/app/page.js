"use client"
import React, { use } from 'react';
import axios from 'axios';
import { Use ,useState } from 'react';


const getData = async () =>{
  try {
    const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users");
    // const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users");

    return data;
  } catch (error) {
    return error;
  }
}

const Homepage = () => {
  const [data, setdata] = useState(use(getData()) || []);
  console.log(data);

  return (
    <>
      {data.map((user,idx)=>{
          return (
            <>
            <p key={user.idx} className='p-tag' >{user.name}</p>
            <p key={user.idx} className='email-tag' >{user.email}</p>

            </>
            )
      })} 
    </>
  )
}

export default Homepage