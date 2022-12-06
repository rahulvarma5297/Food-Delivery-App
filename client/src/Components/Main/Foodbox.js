import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Foodbox = (props) => {
  
  const navigate = useNavigate();

  return (
    <>
      <div className="box">
        <img src={props.img} alt="" />
        <div className="content">
          <h3>
            {" "}
            <i className="fas fa-utensils" style={{marginRight: "10px"}}></i>
            {props.food}{" "}
          </h3>
          <p>{props.data}</p>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="price">
            {" "}
            ₹{props.price2} <span>₹{props.price1}</span>{" "}
          </div>

          <button
            className="btn"
            onClick={() => {
              const data = {
                img: props.img,
                food: props.food,
                price2: props.price2,
                count: 1,
              };
              var index = 1;
              const user = JSON.parse(localStorage.getItem("user"));
              axios
                .get(`http://localhost:3020/users/${user.id}`)
                .then((res) => {
                  const user = res.data;
                  user.cart.map((item2) => {
                    if (item2.food === data.food) {
                      index = 0;
                    }
                    return null;
                  });
                  // console.log(index);
                  if (index) {
                    const user = JSON.parse(localStorage.getItem("user"));
                    axios
                      .get(`http://localhost:3020/users/${user.id}`)
                      .then((res) => {
                        const user = res.data;
                        user.cart.push(data);
                        axios.put(
                          `http://localhost:3020/users/${user.id}`,
                          user
                        );
                        alert("Added to cart, check your cart in right top profile icon");
                        // navigate("/cart");
                      });
                  }
                  else{
                    alert("Already present in cart !, You can increase the quantity from cart");
                    navigate("/cart");
                  }
                });
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default Foodbox;
