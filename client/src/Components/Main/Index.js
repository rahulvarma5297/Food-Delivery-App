import React from "react";
import "./main.css";
import Upward from "./Upward";
import Header from "../Navbar/Header";
import Vedio from "./Vedio";
import Gallery from "./Gallery";
import Places from "./Food";
import About from "./About";
import Services from "./Services";
import Review from "./Review";
import Feedback from "./Feedback";
import Footer from "./Footer";

const Index = (props) => {
  const navItems = [
    {
      title: "Home",
      path: "/index#home",
    },
    {
      title: "Gallery",
      path: "#gallery",
    },
    {
      title: "Food",
      path: "#food",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Services",
      path: "#services",
    },
    {
      title: "Reviews",
      path: "#review",
    },
    {
      title: "Footer",
      path: "#footer",
    },
  ];
  return (
    <div>
      <Upward />
      <Header user={true} navItems={navItems} />
      <Vedio user={props.user} />
      <Gallery />
      <Places />
      <About />
      <Services />
      <Review />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Index;
