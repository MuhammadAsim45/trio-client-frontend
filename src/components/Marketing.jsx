import React from "react";
import { Button } from "react-bootstrap";

export const Marketing = () => {
  let imgStyle = {
    minHeight: "70vh",
  };
  return (
    <>
      <div className="container">
        <section
          className="d-flex justify-content-between mt-5 my-auto content align-items-center"
          style={imgStyle}
        >
          <div className="left d-flex flex-column">
            <h1 className=" hh1 disp display-1 mt-5 text-center" id="">
              What the TrioAce System does for you ?
            </h1>

            <p className=" hh3 display-6  text-center ">
              • Distribute payment for 4 levels
            </p>
            <p className=" hh3 display-6  text-center ">
              • Placement of new sign up
            </p>
            <p className=" hh3 display-6  text-center ">
              • Move the completed accounts to a higher board
            </p>
            <p className=" hh3 display-6  text-center ">
              • Auto fill for 2nd board onwards{" "}
            </p>
            <p className=" hh3 display-6  text-center ">
              • Allocate reborn accounts
            </p>
          </div>
          <div className="right">
            <img
              src="../images/system.jpg"
              alt=""
              className="right_img systemimg"
            />
          </div>
        </section>
        <hr />
        <section
          className="d-flex justify-content-between mt-5 my-auto content align-items-center"
          style={imgStyle}
        >
          <div className="right">
            <img
              src="../images/international.jpg"
              alt=""
              className="right_img systemimg"
            />
          </div>
          <div className="left d-flex flex-column">
            <h1 className=" hh1 disp display-1 mt-5 text-center" id="">
              Want to be a part of TRIO ACE INTERNATIONAL?
            </h1>

            <p className=" hh3 display-6  text-center ">
              • Download the TrioAce Wallet App
            </p>
            <p className=" hh3 display-6  text-center ">
              • Sign up on the platform
            </p>
            <p className=" hh3 display-6  text-center ">
              • Make a Deposit on the platform
            </p>
            <p className=" hh3 display-6  text-center ">
              • Complete the Profile & KYC
            </p>
            <p className=" hh3 display-6  text-center ">
              • Complete the Starter board
            </p>
          </div>
        </section>
        <hr />
        <h1 className="disp display-1 my-5">Download Marketing Tools</h1>
        <p className=" hh2 d_para display-4 text-center">
          Trio Ace Plan Presentation
          <Button variant="primary" type="submit" className="login">
            Download
          </Button>
        </p>
        <p className=" hh2 d_para display-4 text-center">
          Trio Ace Distribution Presentation
          <Button variant="primary" type="submit" className="login">
            Download
          </Button>
        </p>
      </div>
    </>
  );
};
