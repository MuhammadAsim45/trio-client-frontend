import React from "react";
import { Cardd } from "./Cardd";

export const Loans = () => {
  const loan = [
    {
      id: 1,
      cardImg: "../images/l2.png",
      cardTitle: "Loans Overview",
      cardText:
        "Meet your financial needs with HBL’s loan products. Whether it’s the purchase of a new car, buying a new house, an unforeseen expense or bridging the gap until pay day, finance your dreams with HBL’s loan products. ",
    },
    {
      id: 2,
      cardImg: "../images/l3.png",
      cardTitle: "HBL PersonalLoan ",
      cardText:
        "​A loan facility that provides you financial assistance whenever you need it. This will help you finance your dreams as well as be your support in difficult times.  ",
    },
    {
      id: 2,
      cardImg: "../images/l4.png",
      cardTitle: "HBL CarLoan ",
      cardText:
        "​Don’t just dream, get your dream car. HBL offers a flexible and hassle-free financing facility that enables you to own your dream car and provides financing up to 85% of the value of your desired car.   ",
    },
    {
      id: 2,
      cardImg: "../images/l5.png",
      cardTitle: "HBL ReadyCash  ",
      cardText:
        "​HBL Readycash is a one stop solution to fullfill all your financing needs it offers a smooth finance facility with a credit line.",
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
            LOANS
          </h1>
          <p className="d_para display-1 mt-5">
            Fulfil your dreams with our loan products
          </p>
          <p className="display-6 mt-4">
            and build the future you see for yourself
          </p>
        </div>
        <div className="right">
          <img src="../images/l1.png" alt="" className="right_img" />
        </div>
      </section>
      <hr />
      <div className="container">
        <section className="container">
          <h1 className="disp display-1">Loans</h1>
          <div className="card_container container my-5">
            {loan.map((elem) => {
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
