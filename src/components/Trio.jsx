import React from "react";
import { Cardd } from "./Cardd";

export const Trio = () => {
  const Card = [
    {
      id: 1,
      cardImg: "../images/wallet.jpg",
      cardTitle: "Non-custodial (HD Wallet)",
      cardText:
        "Private keys of the crypto wallets are held solely by the users, making it more secure and private to use.      ",
    },
    {
      id: 2,
      cardImg: "../images/earning.jpg",
      cardTitle: "Multi-level earningss      ",
      cardText:
        "​Worlds first board system on blockchain network that allows you to earn four levels of earnings.     ",
    },
    {
      id: 2,
      cardImg: "../images/payment.jpg",
      cardTitle: "No payment holding    ",
      cardText:
        "All the payments are channelled instantly to each member's wallet address as each criteria is met.",
    },
    {
      id: 2,
      cardImg: "../images/withdraw.jpg",
      cardTitle: "Unlimited withdrawal     ",
      cardText:
        "There is no withdrawal limit for the user. One can withdraw as little or as much as they want at any given time.      ",
    },
    {
      id: 2,
      cardImg: "../images/transparent.jpg",
      cardTitle: "Transparency    ",
      cardText:
        "​Distribution ledgers are viewable in the smart contract, which are easily accessible to everyone online.  ",
    },
    {
      id: 2,
      cardImg: "../images/profit.jpg",
      cardTitle: "1 profile -Multiple accounts     ",
      cardText:
        "A new account will be automatically reborn each time the Starter and Advance boards are completed.     ",
    },
    {
      id: 2,
      cardImg: "../images/sign.jpg",
      cardTitle: "Multi-Signature  ",
      cardText:
        "​(Multi-Sign) Multi-signature addresses provide an added layer of security by requiring more than one key to authorize a transaction.     ",
    },
    {
      id: 2,
      cardImg: "../images/trans.jpg",
      cardTitle: "Accelerated transactions      ",
      cardText:
        "​Blockchain brings automation through a smart contract, which eliminates the need for human-driven operations.     ",
    },
    {
      id: 2,
      cardImg: "../images/imm.jpg",
      cardTitle: "Immutable smart contract   ",
      cardText:
        "​Any changes to the system cannot be made once the contract is defined and deployed, which ensures the program's security and transparency      ",
    },
  ];

  return (
    <>
      <div className="container ">
        <div className="container">
          <section className="container">
            <h1 className="disp display-1">Why Trio?</h1>
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
      </div>
    </>
  );
};
