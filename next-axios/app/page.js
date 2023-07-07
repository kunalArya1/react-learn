"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {

  // creating state to store data
  const [data, setdata] = useState([]);


  // fetching the data using Axios
  const alldata = () => {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=21")
      .then((res) => {
        // console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <h1 className="title">AXIOS WORKING</h1>
      <hr />
      <div className="grid">{image}</div>
    </div>
  );
};

export default Homepage;
