import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const navItems = [
    {
      title: "Home",
      path: "/index",
    },
  ];

  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get(`http://localhost:3020/users/${user.id}`).then((res) => {
      const user = res.data;
      setOrders(user.orders);
    });
  }, [orders.length]);

  return (
    <div>
      <Header user={true} navItems={navItems} />
      {orders.length === 0 ? (
        <h1>Your Orders List is Empty</h1>
      ) : (
        <div className="orders">
          <div className="">
          {
            orders.map((item, key) => {
              return (
                <div className="box-container" key={key}>
                  <h2 style={{fontSize: "20px"}}>{key+1}<sup>st</sup> order:</h2>
                  {
                    item.map((item2, key2) => {
                      return (
                        <div key={key2} className="box">
                          <img src={item2.img} alt="image_loading" />
                          <h2>{item2.food}</h2>
                          <h2>₹{item2.price2}</h2>
                          <h2>Quantity : {item2.count}</h2>
                        </div>
                      )
                    })
                  }
                </div>
              );
            })
          }
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
