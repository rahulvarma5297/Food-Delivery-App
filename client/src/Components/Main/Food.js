import React, { useState } from "react";
import "./main.css";

import Foodbox from "./Foodbox";
import Data from "./Data.js";


const Places = () => {
  const [state, setState] = useState([]);
  const [datanotdount, setdata] = useState(true);
  
  // This is the data fetching from the API
  // const [Data, setData] = useState([]);
  // React.useEffect(() => {
  //   fetch("http://localhost:3020/data")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(Data);
  //     });
  // }, []);
  return (
    <div className="section">
      <div className="packages" id="food">
        <h1 className="heading">
          <span>F</span>
          <span>O</span>
          <span>O</span>
          <span>D</span>
        </h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for food"
            onChange={(e) => {
              const search = e.target.value.trimStart().trimEnd();
              setdata(true);
              const data = Data.filter((item) => {
                return item.food.toLowerCase().includes(search.toLowerCase());
              });
              if (data.length === 0) {
                setdata(false);
              }
              setState(data);
            }}
          />
          <i className="fas fa-search"></i>
        </div>

        <div className="box-container">
          {datanotdount ? (
            state.length === 0 ? (
              Data.map((item) => {
                return <Foodbox {...item} />;
              })
            ) : (
              state.map((item) => {
                return <Foodbox {...item} />;
              })
            )
          ) : (
            <h1 className="notfound">No Data Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Places;
