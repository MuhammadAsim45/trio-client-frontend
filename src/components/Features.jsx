import React from "react";
import { Cardd } from "./Cardd";

export const Features = () => {
  const current = [
    {
      id: 1,
      cardImg: "../images/wallet.jpg",
      cardTitle: "Non-Custodial Wallet",
      cardText:
        "A blockchain wallet that lets you have full control of your funds with your private keys. No central bodies have access to your keys, passwords and digital assets. Users will have total anonymity as there is no KYC process for the wallet. ",
    },
    {
      id: 2,
      cardImg: "../images/decentralize.jpg",
      cardTitle: "Decentralized Finance (DeFi)",
      cardText:
        "A system where financial products are open to anyone to use and does not rely on companies or institutions such as banks or brokerages to facilitate a transaction. Smart contracts are used to create protocols that replicate existing financial services in a transparent manner.",
    },
    {
      id: 3,
      cardImg: "../images/smart.jpg",
      cardTitle: "Smart Contract",
      cardText:
        "A self-executing contract containing the terms and conditions of an agreement among peers. It is like a digital vending machine where there is no requirement for a clerk or cashier. A set of rules once deployed to the network automates transactions between peers as programmed.",
    },
    {
      id: 4,
      cardImg: "../images/peer.jpg",
      cardTitle: "Peer to multi peer (P2MP)  ",
      cardText:
        " The decentralized interactions between parties in a distributed network which assigns tasks and workloads between peers. Here, peers can exchange digital assets or data without intermediaries.",
    },
    {
      id: 5,
      cardImg: "../images/atom.jpg",
      cardTitle: "Atomic Swap",
      cardText:
        " A technique that allows for quick trade of cryptocurrencies from different blockchain networks from one party to another, without the use of an exchanges or other intermediary.",
    },
  ];

  return (
    <>
      <div className="container ">
        <div className="container">
          <section className="container">
            <h1 className="disp display-1 my-5">FEATURES YOU WOULD LIKE</h1>
          </section>
        </div>
        <div className="card_container container my-5">
          {current.map((elem) => {
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
        <hr />
      </div>
    </>
  );
};
