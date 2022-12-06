import React from "react";
import SericesBox from "./Box";

const Services = () => {
  return (
    <div className="section">
      <section className="services" id="services">
        <h1 className="heading">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </h1>

        <div className="box-container">
          <SericesBox
            styleName="fa-utensils"
            food="food and drinks"
            data="We have been partners with wide range of hotels whose top priority
            is to provide quality food to their customers because food is
            culture, habit, craving and identity."
            btn={false}
          />

          <SericesBox
            styleName="fa-credit-card"
            food="secure payments"
            data="payment is made through secure payment gateway and we do not store any of your payment details."
            btn={false}
          />

          <SericesBox
            styleName="fa-thumbs-up"
            food="100% satisfaction"
            data="Safety and satisfaction of our customers is our top priority."
            btn={false}
          />
          <SericesBox
            styleName="fa-truck"
            food="fast delivery"
            data="fastest is our priority and we deliver your food in 30 minutes."
            btn={false}
          />

          <SericesBox
            styleName="fa-clock"
            food="24x7 service"
            data="24x7 availability of our services is guaranteed."
            btn={false}
          />

          <SericesBox
            styleName="fa-users"
            food="24x7 service"
            data="We have been partners with wide range of hotels whose top priority
            is to provide quality food to their customers because food is
            culture, habit, craving and identity."
            btn={false}
          />

          <SericesBox
            styleName="fa-gift"
            food="gift cards"
            data="gift and discount cards are available for our customers who purchase more than 1000 rupees."
            btn={false}
          />

          <SericesBox
            styleName="fa-hand-holding-heart"
            food="support"
            data="Our kind support team is always available to help you."
            btn={false}
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
