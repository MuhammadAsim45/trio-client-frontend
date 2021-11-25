import React from "react";
import { Cardd } from "./Cardd";

export const Wealth = () => {
  const wealth1 = [
    {
      id: 1,
      cardImg: "../images/w11.png",
      cardTitle: "HBL InvestmentServices",
      cardText:
        "It is critical to understand the difference between savings and investments. Generally people assume that savings and investments are the same, but they are wrong.    ",
    },
    {
      id: 2,
      cardImg: "../images/w12.png",
      cardTitle: "HBL Asset management",
      cardText:
        "​HBL Asset Management is one of them. The company was incorporated in February 2006",
    },
  ];
  const wealth2 = [
    {
      id: 1,
      cardImg: "../images/w21.png",
      cardTitle: "Jubilee Tabeer ",
      cardText:
        "As parents, we know that planning for our children’s future is the most important thing we can do for them. You’ve probably already made investments for their education and marriage",
    },
    {
      id: 2,
      cardImg: "../images/w22.png",
      cardTitle: "Jubilee Hawwa",
      cardText:
        "​​Women of today embody confidence and style. They pay attention to the little of details so that all their plans are executed flawlessly. But wait, have they secured their futures too? ",
    },
    {
      id: 2,
      cardImg: "../images/w23.png",
      cardTitle: "Jubilee Shandur ",
      cardText:
        "​At HBL we know you work hard for your money, thus expect it to work hard for you. Shandur Plan is Pakistan’s first ever life insurance product that strives to meet the financial needs of high net worth individuals.",
    },
    {
      id: 2,
      cardImg: "../images/w24.png",
      cardTitle: "EFU Sahara Plans ",
      cardText:
        "​Your family looks towards you for support and strength. You have given them a lot and you would want them to get the best in future. However, life is unpredictable and no one can have control over future uncertainities. Life is challenging",
    },
  ];
  let imgStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container">
      <section
        className="d-flex justify-content-between mt-5 my-auto content"
        style={imgStyle}
      >
        <div className="left">
          <h1 className="d_heading mt-5" id="rootHeading">
            WEALTH
          </h1>
          <p className="d_para display-1 mt-5">
            Sow the seeds of a brighter future with
          </p>
          <p className="display-6 mt-4">
            HBL’s wide range of investment services
          </p>
        </div>
        <div className="right">
          <img src="../images/w.png" alt="" className="right_img" />
        </div>
      </section>
      <hr />
      <div className="container">
        <section className="container">
          <h1 className="disp display-1">Investment Services</h1>
          <div className="card_container container my-5">
            {wealth1.map((elem) => {
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
        <hr />
        <section className="container">
          <h1 className="disp display-1">Bancassurance</h1>
          <div className="card_container container my-5">
            {wealth2.map((elem) => {
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
  );
};
