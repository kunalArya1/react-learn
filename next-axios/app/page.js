"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {

  // creating state to store data
  const [data, setdata] = useState([]);
  // for error handling
  const [error, seterror] = useState("");


  // fetching the data using Axios
  const alldata = () => {
    axios
      .get("https://picsum.photos/v2/list?page=7&limit=15")
      .then((res) => {
        // console.log(res.data);
        setdata(res.data);
      })
        // error handling
      .catch((err) => {
        console.log(err);
        seterror(err);
      });
  };

  // React paginate
  const handlePageClick = (e) =>{
    setpage(e.selected);
    console.log(e);
  }

  useEffect(() => {
    alldata();
  }, []);


  // runnig map function to get all data
  const image = data.map((image, i) => {
    return (
      <div key={image.id} className="image-div">
        <img src={image.download_url} height={200} alt="" />
        <p>{image.author}</p>
      </div>
    );
  });

  

  // rendering the data
  return (
    <div>
      <h1 className="title">AXIOS </h1>
      {error!== "" && <h2>{error}</h2>}

      <hr />
      <div className="grid">{image}</div>
      
    </div>
  );
};

export default Homepage;
