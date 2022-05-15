import React from "react";
import { FaApple } from "../../node_modules/react-icons/fa";
import { Accordion } from "react-bootstrap";

export const Root = () => {
  let imgStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container">
      <section
        className="d-flex justify-content-between mt-5 my-auto content"
        style={imgStyle}
      >
        <div className="left d-flex flex-column" data-aos="slide-right">
          <h1 className=" hh1 disp display-1 mt-5" id="">
            Trio ACE International
          </h1>
          <p className=" hh2 d_para display-4 text-center">
            Architectured Community Ecosystem
          </p>
          <p className=" hh3 display-6  text-center ">
            World First Architectured Community Ecosystem Which Is Automated
            With Three Combined Technologies Consisting BlockChain System,
            Matrix Board System And Digital AI Signature System
          </p>
          <div className="button_container">
            <button className="login mr-5">SIGN UP</button>
            <button className="login ">LOGIN</button>
          </div>
        </div>
        <div className="right" data-aos="slide-left">
          <img src="../images/acc1.png" alt="" className="right_img" />
        </div>
      </section>
      <br />
      <br />
      <br />
      <hr />
      <section
        className="d-flex justify-content-between mt-5 my-auto content play_store"
        style={imgStyle}
      >
        <div className="left d-flex flex-column">
          <h1 className="disp display-1 mt-5 text-center" id="">
            Download TRIO ACE Wallet App Now
          </h1>

          <p className="display-6  text-center ">
            Your All-In-One Cryptocurrency Wallet. Manage crypto assets at your
            finger tip. The easiest way to send and receive crypto coins.
          </p>
          <p className="display-6  text-center ">
            Send and receive TRX and TRC20 tokens, ETH and ERC20 tokens and many
            more.
          </p>
          <div className="button_container">
            <img
              src="https://trioaceinternational.com/assets/main/img/home7/google_icon.png"
              alt=""
              className="pointer"
            />

            <span className="apple pointer">
              <FaApple />
            </span>
          </div>
        </div>
        <div className="right">
          <img
            src="../images/playstore.png"
            alt=""
            className="right_img playstore_img"
          />
        </div>
      </section>
      <br />
      <br />
      <br />

      <hr />
      <h1 className="disp display-1 mt-5" id="">
        FAQs
      </h1>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className="accordian_item display-5">
              Why Trio Ace is introduced as a matrix board crowdfunding
              programme?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordian_body display-6">
              It is designed this way to build a strong community database and
              to reward members that help grow the reach of the programme
              through networking. This database built over time then becomes a
              platform to design future ventures such as *insert roadmap
              teaser*. There are various propositions to give back to the
              community via philanthropy.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p className="accordian_item display-5">
              Why join Trio Ace International?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordian_body display-6">
              • To be part of history in the making. Technology and innovation
              are inevitable. By being a member in this reliable programme,
              opportunity is created for each member to learn about and generate
              digital assets for the future. Trio Ace is reliable for various
              reasons;
            </p>
            <p className="accordian_body display-6">
              a. This programme is automated via smart contract meaning there is
              no human interference. It is accurate, fast, efficient, stores
              records automatically and removes possibility of error or
              manipulation.
            </p>
            <p className="accordian_body display-6">
              b. The ledgers stored are transparent and are viewable via
              Tronscan. A member can also see the real time peer to peer
              transfers and verify that there is no money held by the
              organisation (balance = 0 USD).
            </p>
            <p className="accordian_body display-6">
              c. The wallet is a non-custodial which means your privacy and
              security is maintained. Members will have full control of their
              funds with their own private keys. The funds in the wallet are not
              accessible by the organisation.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p className="accordian_item display-5">
              Can the system cease operating? What are the risks?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordian_body display-6">
              No. There are no funds held by the organisation, thus it cannot be
              exploited by shutting down the programme. The smart contract
              redirects the funds between participants in the programmed manner.
              All transfers are made irrevocably between participants in real
              time. The transferred funds are made to the participant’s
              non-custodial HD wallet where privacy is maintained and security
              is high.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p className="accordian_item display-5">
              What makes Trio Ace International unique from the rest?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordian_body display-6">
              • Trio Ace is all about innovation. These are some determinants
              that make Trio Ace International stand out;
            </p>
            <p className="accordian_body display-6">
              a. Having the programme run 100% fully on smart contract and
              blockchain technology. While there are similar programmes out
              there operating minimally on smart contract, by having the system
              run fully on smart contract, Trio Ace completely eliminates human
              interference. This can be verified by blockchain explorers. Since
              Trio Ace operates in the TRON network, it can be verified via
              Tronscan.
            </p>
            <p className="accordian_body display-6">
              b. The transparency of the Trio Ace system. All distribution
              ledgers are viewable in the smart contract address via Tronscan.
              As soon as a member joins, the distribution of payments can be
              seen in real-time.
            </p>
            <p className="accordian_body display-6">
              c. Trio Ace has its own non-custodial wallet. This means the keys
              of the wallet are held directly by the user and there can be no
              access to the wallet by the creators and the organisation. This
              gives users high levels of privacy and security.
            </p>
            <p className="accordian_body display-6">
              d. Trio Ace International encourages Decentralised Finance (DeFi).
              The system runs on blockchain technology and smart contracts. All
              transactions are directly between participants, thus not relying
              on any central financial intermediaries. This makes transaction
              costs cheaper, faster and more efficient.
            </p>
            <p className="accordian_body display-6">
              e. Atomic swaps allow members to exchange their digital assets
              without going through exchanges. This means wallets remain
              decentralized, risks are lower, and trading is even cheaper.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p className="accordian_item display-5">
              How to withdraw the amount earned from the programme to the
              wallet?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordian_body display-6">
              No withdrawal is required as the funds are distributed
              automatically in real-time to the participant’s wallet as the
              criteria is met. This is achieved through the smart contract and
              is viewable via Tronscan. The funds in the wallet can then be
              swapped, transferred or exchanged as and when the member wants to.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <br />
    </div>
  );
};
