import React from "react";
import { Cardd } from "./Cardd";

export const Cards = () => {
  const Card = [
    {
      id: 1,
      cardImg: "../images/ca1.png",
      cardTitle: "HBL Deals and Discounts",
      cardText: "Explore the best deals at your favorite places!        ",
    },
    {
      id: 2,
      cardImg: "../images/ca2.png",
      cardTitle: "HBL Travel Rewards      ",
      cardText:
        "​Take to the skies this winter with HBL Rewards Program. HBL CreditCard now brings you a limited time offer to pay off your airline ticket purchases using your reward points        ",
    },
  ];
  const Credit = [
    {
      id: 1,
      cardImg: "../images/cr1.png",
      cardTitle: "Credit Cards Overview      ",
      cardText:
        "Welcome to the world of possibilities. Experience freedom, flexibility and round the clock convenience with HBL CreditCard. Whether its shopping, dining or traveling, HBL CreditCard makes everything more rewarding        ",
    },
    {
      id: 2,
      cardImg: "../images/cr2.png",
      cardTitle: "HBL Platinum CreditCard   ",
      cardText:
        "Designed for your lifestyle providing luxury, excitement and world-class service!        ",
    },
    {
      id: 3,
      cardImg: "../images/cr3.png",
      cardTitle: "HBL Gold & Green CreditCard      ",
      cardText:
        "Welcome to a world of convenience, flexibility and opportunities. you have actually chosen to enter a world of simplicity and excitement.        ",
    },
    {
      id: 4,
      cardImg: "../images/cr4.png",
      cardTitle: "HBL CreditCard – Contactless      ",
      cardText: "Payments made faster, simpler and more convenient!        ",
    },
  ];
  const Debit = [
    {
      id: 1,
      cardImg: "../images/dr1.png",
      cardTitle: "Debit Cards Overview      ",
      cardText: "Enjoy the convenience of accessing your HBL account        .",
    },
    {
      id: 2,
      cardImg: "../images/dr2.png",
      cardTitle: "HBL World DebitCard      ",
      cardText: "Enjoy exclusive benefits Worldwide ",
    },
    {
      id: 3,
      cardImg: "../images/dr3.png",
      cardTitle: "HBL Gold DebitCard      ",
      cardText:
        "Manage your financial responsibilities while enjoying life.        ",
    },
    {
      id: 4,
      cardImg: "../images/dr4.png",
      cardTitle: "HBL PayPak DebitCard      ",
      cardText:
        "HBL PayPak Debit Card enables 24/7 access to your bank account within Pakistan. Backed by the power of PayPak, this card offers you a basic level and convenient payment solution at a lower annual fee.        ",
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
          <div className="left" data-aos="slide-right">
            <h1 className="d_heading mt-5" id="rootHeading">
              CARDS
            </h1>
            <p className="d_para display-1 mt-5 text-center">
              Add value to your life
            </p>
            <p className="display-6 mt-4 text-center">
              with HBL Debit and Credit Cards
            </p>
          </div>
          <div className="right" data-aos="slide-left">
            <img src="../images/ca.png" alt="" className="right_img" />
          </div>
        </section>
        <hr />
        <div className="container">
          <section className="container">
            <h1 className="disp display-1">Cards</h1>
            <div className="card_container container my-5">
              {Card.map((elem) => {
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
          </section>
        </div>
        <hr />
        <div className="container ">
          <section className="container">
            <h1 className="disp display-1">Credit Cards</h1>
            <div className="card_container container my-5">
              {" "}
              {Credit.map((elem) => {
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
          </section>
        </div>
        <hr />
        <div className="container">
          <section className="container">
            <h1 className="disp display-1">Debit Cards</h1>
            <div className="card_container container my-5">
              {Debit.map((elem) => {
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
          </section>
        </div>
      </div>
    </>
  );
};
