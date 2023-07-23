"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

// A :- mRUVsCSkLynRko8PnivskiT4v5LyqiZX9SZamcXFK5E

// s :- YZnbvBGLN3W28JndN_PaDI8o3GLwv68OGCEfTqPZ6N0
const Homepage = () => {

  const [data, setdata] = useState([]);


  const alldata = () =>{
    axios.get("https://api.unsplash.com/photos?client_id=mRUVsCSkLynRko8PnivskiT4v5LyqiZX9SZamcXFK5E&page=8")
    .then((res)=>{
      // console.log(res.data);
      setdata(res.data);
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  console.log(data);

  const renData = data.map((data,idx)=>{
      return (
        <div key={data.id}>
        <img src={data.links.download} height={100} alt="" />
        </div>
      );
  })


  


  useEffect(() =>{
      alldata();
  },[])
  return (
    <>
    <div>Homepage</div>
    <div>{renData}</div>
    </>
  )
}

export default Homepage;