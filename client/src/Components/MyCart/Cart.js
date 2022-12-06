import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import "./Cart.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Tours = () => {
  const [money, setMoney] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  setTimeout(() => {
    var total = 0;
    const user = JSON.parse(localStorage.getItem("user"));
    axios.get(`http://localhost:3020/users/${user.id}`).then((res) => {
      const user = res.data;
      user.cart.map((item2) => {
        total = total + parseInt(item2.price2) * item2.count;
      });
      setMoney(total);
    });
  }, 1000);
  const navItems = [
    {
      title: "Home",
      path: "/index#food",
    },
  ];

  const [cart, setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios.get(`http://localhost:3020/users/${user.id}`).then((res) => {
      const user = res.data;
      setCart(user.cart);
    });
  }, [cart.length]);

  const handlesubmit = (e) => { 
    e.preventDefault();
  };
  return (
    <div>
      <Header user={true} navItems={navItems} />
      <HashLink smooth to="/index#food" style={{ width: "600px" }}>
        <input
          type="submit"
          className="btn-more"
          value="<-- Continue for More Food"
        />
      </HashLink>
      {cart.length === 0 ? (
        <>
          <h1>Your cart is Empty </h1>
          <h2 style={{ textAlign: "center" }}>
            Go to Home and add some food to your cart
          </h2>
          {/* <HashLink smooth to="/index#food" style={{ marginLeft: "43%" }}>
            <input type="submit" className="btn" value="Click" />
          </HashLink> */}
          <h2 style={{ textAlign: "center", color: "red" }}>
            If already ordered You can Check here{" "}
            <Link to="/orders" style={{ fontSize: "30px" }}>
              Order Page
            </Link>
          </h2>
        </>
      ) : (
        <div className="cart">
          <div className="box-container">
            {cart.map((item, key) => {
              return (
                <div className="box" key={key}>
                  <img src={item.img} alt="image_loading" />
                  <div className="content">
                    <h2>{item.food}</h2>
                    <h2>₹{item.price2}</h2>
                  </div>

                  <div className="content">
                    <input
                      type="submit"
                      className="btn-plus"
                      value="-"
                      onClick={() => {
                        if (item.count === 1) {
                          const user = JSON.parse(localStorage.getItem("user"));
                          axios
                            .get(`http://localhost:3020/users/${user.id}`)
                            .then((res) => {
                              axios
                                .put(`http://localhost:3020/users/${user.id}`, {
                                  ...res.data,
                                  cart: res.data.cart.filter(
                                    (ob, a) => a !== key
                                  ),
                                })
                                .then((res) => {
                                  setCart(res.data.cart);
                                });
                            });
                        } else {
                          const user = JSON.parse(localStorage.getItem("user"));
                          axios
                            .get(`http://localhost:3020/users/${user.id}`)
                            .then((res) => {
                              axios
                                .put(`http://localhost:3020/users/${user.id}`, {
                                  ...res.data,
                                  cart: cart.map((item2) => {
                                    if (item2.food === item.food) {
                                      return {
                                        ...item2,
                                        count: item.count - 1,
                                      };
                                    } else {
                                      return item2;
                                    }
                                  }),
                                })
                                .then((res) => {
                                  setCart(res.data.cart);
                                });
                            });
                        }
                      }}
                    />
                    <h2 style={{ color: "red" }}>{item.count}</h2>
                    <input
                      type="submit"
                      className="btn-minus"
                      value="+"
                      onClick={() => {
                        if (item.count >= 10) {
                          alert(
                            `Sorry, You can't order more than ${item.count} (OUT OF STOCK)`
                          );
                        } else {
                          const user = JSON.parse(localStorage.getItem("user"));
                          axios
                            .get(`http://localhost:3020/users/${user.id}`)
                            .then((res) => {
                              axios
                                .put(`http://localhost:3020/users/${user.id}`, {
                                  ...res.data,
                                  cart: cart.map((item2) => {
                                    if (item2.food === item.food) {
                                      return {
                                        ...item2,
                                        count: item.count + 1,
                                      };
                                    } else {
                                      return item2;
                                    }
                                  }),
                                })
                                .then((res) => {
                                  setCart(res.data.cart);
                                });
                            });
                        }
                      }}
                    />
                  </div>
                  <div className="addtocart">
                    <button
                      onClick={() => {
                        const user = JSON.parse(localStorage.getItem("user"));
                        axios
                          .get(`http://localhost:3020/users/${user.id}`)
                          .then((res) => {
                            axios
                              .put(`http://localhost:3020/users/${user.id}`, {
                                ...res.data,
                                cart: res.data.cart.filter(
                                  (ob, a) => a !== key
                                ),
                              })
                              .then((res) => {
                                setCart(res.data.cart);
                              });
                          });
                      }}
                    >
                      <span class="bi-trash red-color"> </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {money && (
        <>
          <div className="address">
            <h2 style={{ fontSize: "30px" }}>Total amount to pay: {money}</h2>
            <form onSubmit={handlesubmit}>
              <input
                type="textarea"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <br />

              <input
                type="number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <br />
              <button
                type="submit"
                className="btn"
                style={{ width: "200px" }}
                onClick={() => {
                  if (money === 0) {
                    alert("Your Cart is Empty");
                  } else if (address === "") {
                    alert("Please Enter your Address");
                  } else if (phone.length < 10) {
                    alert("Please Enter valid Phone Number (10 digits)");
                  } else {
                    const user = JSON.parse(localStorage.getItem("user"));
                    axios
                      .get(`http://localhost:3020/users/${user.id}`)
                      .then((res) => {
                        const user = res.data;
                        // insert in the orders array
                        user.orders.push(user.cart);
                        axios
                          .put(`http://localhost:3020/users/${user.id}`, {
                            ...res.data,
                            cart: [],
                          })
                          .then((res) => {
                            alert(
                              `Payment of ${money} Successfull and Your Order is placed to ${address}`
                            );
                            setCart(res.data.cart);
                          });
                      });
                  }
                }}
              >
                <span class="bi-cart-check green-color"> Pay {money}</span>
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Tours;
