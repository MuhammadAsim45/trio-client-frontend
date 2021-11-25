import React from "react";
import { Cardd } from "./Cardd";

export const DigitalBanking = () => {
  const digi = [
    {
      id: 1,
      cardImg: "../images/d1.png",
      cardTitle: "HBL interbanking",
      cardText:
        "With HBL InternetBanking you can seamlessly bank from anywhere, anytime and perform…",
    },
    {
      id: 2,
      cardImg: "../images/d2.png",
      cardTitle: "HBL mobile",
      cardText:
        "HBL Mobile is an app designed to simplify the way you bank. It enables you to…",
    },
    {
      id: 3,
      cardImg: "../images/d3.jpg",
      cardTitle: "ebank roshan digital ",
      cardText:
        " Roshan Digital Account is a unique opportunity for Overseas Pakistanis",
    },
    {
      id: 4,
      cardImg: "../images/d5.png",
      cardTitle: "HBL fusion",
      cardText:
        "HBL Fusion enables digital submission of trade and foreign remittance approvals.",
    },
  ];
  let imgStyle = {
    minHeight: "70vh",
  };
  return (
    <>
      <div className="container ">
        <section
          className="d-flex justify-content-between mt-5 my-auto content"
          style={imgStyle}
        >
          <div className="left">
            <h1 className="d_heading mt-5" id="rootHeading">
              DIGITAL BANKING
            </h1>
            <p className="d_para display-1 mt-5">Bank on the go!</p>
            <p className="display-6 mt-4">
              Explore our exclusive digital products
            </p>
          </div>
          <div className="right">
            <img src="../images/d1.png" alt="" className="right_img" />
          </div>
        </section>
        <hr />
        <div className="container">
          <section className="container">
            <h1 className="disp display-1">Digital Banking</h1>
          </section>
        </div>
      </div>
      <div className="card_container container my-5">
        {digi.map((elem) => {
          return (
            <Cardd
              id={elem.id}
              img={elem.cardImg}
              title={elem.cardTitle}
              text={elem.cardText}
            />
          );
        })}
      </div>
    </>
  );
};
