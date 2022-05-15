import React from "react";

export const About = () => {
  let imgStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container">
      <section
        className="d-flex justify-content-between mt-5 my-auto content align-items-center"
        style={imgStyle}
      >
        <div
          className="left d-flex flex-column leftabout"
          data-aos="slide-right"
        >
          <h1 className=" hh1 disp display-1 mt-5" id="">
            Few Words About Us
          </h1>

          <p className=" hh3 display-6  text-center ">
            Trio Ace is a decentralized community ecosystem system that began
            with an idea in 2020 to resolve public monetary challenges via a
            combination of blockchain technology and crowdfunding system.
          </p>
          <p className=" hh3 display-6  text-center ">
            A transparent and secure platform was created with the goal of
            giving a positive impact to the global community in terms of funds
            and education to explore the cryptocurrency market.
          </p>
          <h1>Ecosystem for the Future</h1>
          <p className=" hh3 display-6  text-center ">
            Build your capital and store your cryptocurrencies privately with
            the Trio Ace wallet. With the instant distribution of payments and
            online ledgers, you can confidently work towards achieving your
            financial freedom.
          </p>
        </div>
        <div className="right" data-aos="slide-left">
          <img src="../images/About1.jpg" alt="" className="right_img " />
        </div>
      </section>
      <hr />
      <section
        className="d-flex justify-content-between mt-5 my-auto content align-items-center"
        style={imgStyle}
      >
        <div className="left d-flex flex-column" data-aos="slide-right">
          <h1 className=" hh1 disp display-1 mt-5" id="">
            Our Mission
          </h1>

          <p className=" hh3 display-6  text-center ">
            Our mission is to provide a blockchain crowdfunding platform in an
            open financial system where everyone can achieve financial freedom.
          </p>
        </div>
        <div className="right" data-aos="slide-left">
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src="../images/mission.jpg" alt="" className="right_img" />
        </div>
      </section>
      <hr />
      <section
        className="d-flex justify-content-between mt-5 my-auto content align-items-center"
        style={imgStyle}
      >
        <div className="left d-flex flex-column" data-aos="slide-right">
          <h1 className=" hh1 disp display-1 mt-5" id="">
            Our Vision
          </h1>

          <p className=" hh3 display-6  text-center ">
            Our vision is to accelerate and educate the global community into
            adapting and migrating towards decentralized finance for an access
            to equal economic opportunities.
          </p>
        </div>
        <div className="right" data-aos="slide-left">
          <img src="../images/vision.jpg" alt="" className="right_img" />
        </div>
      </section>
    </div>
  );
};
