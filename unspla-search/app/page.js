"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState("");

  const sarchHandler = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=&{filter}`
      )
      .then((res) => {
        setdata(res.data.results);
        setfilter("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  useEffect(() => {
    sarchHandler();
  }, []);

  let image = <p>loading ...</p>;
  if (data.length > 0) {
    image = data.map((data, idx) => {
      return (
        <div key={data.id}>
          <img src={data.links.download} height={100} alt="" />
        </div>
      );
    });
  }

  return (
    <>
    <div className="pagejs">
      <h1>Search Image</h1><br />

      <form onSubmit={sarchHandler}>
        <input
          type="text"
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
          placeholder="search image"
        />
        <button type="submit">Search</button>
      </form>
      <hr />
      <div>{image}</div>
      <div>
          <p></p>      
      </div>
      </div>
    </>
    
  );
};

export default Homepage;
