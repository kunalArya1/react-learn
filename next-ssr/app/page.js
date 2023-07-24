"use client"
import React, { use } from 'react';
import axios from 'axios';
import { Use ,useState } from 'react';


const getData = async () =>{
  try {
    const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (error) {
    return error;
  }
}

const Homepage = () => {
  const [data, setdata] = useState(use(getData()) || []);
  console.log(data);

  return (
    <div>
      {data.map((user)=>{
          return (
            <div>
            <p className='p-tag' key={user.id}>{user.name}</p>
            <p className='email-tag' key={user.id}>{user.email}</p>

            </div>
            )
      })} 
    </div>
  )
}

export default Homepage