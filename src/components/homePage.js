import React from "react";
import "./../index.css";

const Home = () => {
  return (
    <section className="section-how">
      <div className="container">
        <h2 className="heading-secondary">How it works</h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        {/* STEP 01 */}
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p className="step-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            delectus at quis nisi qui sequi debitis dolorum.
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={require("../app-screen-1.png")}
            className="step-img"
            alt="iPhone app preferences selection screen"
          />
        </div>

        {/* STEP 02 */}
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
          <p className="step-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            delectus at quis nisi qui sequi debitis dolorum.
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={require("../app-screen-2.png")}
            className="step-img"
            alt="iPhone app meal approving plan screen"
          />
        </div>

        {/* STEP 03 */}
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>
          <p className="step-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            delectus at quis nisi qui sequi debitis dolorum.
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={require("../app-screen-3.png")}
            className="step-img"
            alt="iPhone app delivery screen"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
