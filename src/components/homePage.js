import React from "react";
import "./../index.css";

const Home = () => {
  return (
    <section className="section-how">
      <div className="container">
        <h1>In Progress</h1>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sunt.
            Eaque eveniet maiores iste. Consectetur, aliquam quo! Ad atque unde
            reprehenderit earum delectus repellendus ut consequuntur vero ea
            fuga aspernatur eum facilis at non, quas magnam quia neque inventore
            temporibus sequi ex deleniti. Commodi ratione at ea, maxime
            recusandae accusantium odio, quas voluptates, magnam ipsam sapiente
            dignissimos enim provident dolore deleniti sequi est vero impedit a
            eligendi rem praesentium nesciunt! Iure ipsam adipisci expedita
            magni optio veniam, rerum voluptate aliquam quo iusto delectus,
            eaque inventore, maxime et. Maiores commodi porro iusto quibusdam?
            Numquam aliquam vero laboriosam minima at maiores exercitationem..
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sunt.
            Eaque eveniet maiores iste. Consectetur, aliquam quo! Ad atque unde
            reprehenderit earum delectus repellendus ut consequuntur vero ea
            fuga aspernatur eum facilis at non, quas magnam quia neque inventore
            temporibus sequi ex deleniti. Commodi ratione at ea, maxime
            recusandae accusantium odio, quas voluptates, magnam ipsam sapiente
            dignissimos enim provident dolore deleniti sequi est vero impedit a
            eligendi rem praesentium nesciunt! Iure ipsam adipisci expedita
            magni optio veniam, rerum voluptate aliquam quo iusto delectus,
            eaque inventore, maxime et. Maiores commodi porro iusto quibusdam?
            Numquam aliquam vero laboriosam minima at maiores exercitationem..
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sunt.
            Eaque eveniet maiores iste. Consectetur, aliquam quo! Ad atque unde
            reprehenderit earum delectus repellendus ut consequuntur vero ea
            fuga aspernatur eum facilis at non, quas magnam quia neque inventore
            temporibus sequi ex deleniti. Commodi ratione at ea, maxime
            recusandae accusantium odio, quas voluptates, magnam ipsam sapiente
            dignissimos enim provident dolore deleniti sequi est vero impedit a
            eligendi rem praesentium nesciunt! Iure ipsam adipisci expedita
            magni optio veniam, rerum voluptate aliquam quo iusto delectus,
            eaque inventore, maxime et. Maiores commodi porro iusto quibusdam?
            Numquam aliquam vero laboriosam minima at maiores exercitationem..
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
