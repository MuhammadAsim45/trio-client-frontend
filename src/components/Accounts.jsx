import React from "react";
import { Cardd } from "./Cardd";

export const Accounts = () => {
  const current = [
    {
      id: 1,
      cardImg: "../images/cu1.png",
      cardTitle: "Current Accounts Overview",
      cardText:
        "A safe way to accumulate funds, HBL’s current account allows individuals and businesses to deposit money and withdraw funds anytime. Funds can be withdrawn through cheques, ATMs, fund transfers, among other methods.",
    },
    {
      id: 2,
      cardImg: "../images/cu2.png",
      cardTitle: "HBL FreedomAccount",
      cardText:
        "This account provides a range of free unlimited features catering to the banking needs of different customer segments including individuals and business persons. The product is designed so that people may fulfill their business requirements with a convenient and hassle-free banking experience.​​​​​",
    },
    {
      id: 3,
      cardImg: "../images/cu3.png",
      cardTitle: "HBL Conventional CurrentAccount",
      cardText:
        " For individuals & entities seeking a secure and reliable current account, the HBL Conventional Current Account gives you the ease to conduct unlimited transactions, anywhere in Pakistan.",
    },
    {
      id: 4,
      cardImg: "../images/cu4.png",
      cardTitle: "HBL Basic BankingAccount   ",
      cardText:
        " A simple bank account for individuals with minimum transactional requirements. It enables you to fulﬁll your basic banking needs.",
    },
    {
      id: 5,
      cardImg: "../images/cu5.png",
      cardTitle: "HBL AsaanAccount",
      cardText: " An account for New to Bank customers only.",
    },
    {
      id: 6,
      cardImg: "../images/cu6.png",
      cardTitle: "HBL iD",
      cardText:
        " An account serving the needs of youth aged between 18 to 24 years. It offers a wide range of exciting discounts and beneﬁts your favorite restaurants, shop at the trendiest stores or simply top up your mobile credit through HBL Mobile app to catch up with friends.",
    },
    {
      id: 7,
      cardImg: "../images/cu7.png",
      cardTitle: "HBL Foreign Currency CurrentAccount",
      cardText:
        " ​An account ideal for all Pakistanis and foreign nationals who wish to maintain foreign currency deposit.",
    },
    {
      id: 8,
      cardImg: "../images/cu8.png",
      cardTitle: "eBanc by HBL  ",
      cardText:
        " eBanc by HBL allows the Pakistani workforce traveling abroad or local remittance beneficiaries to open an account from any HBL branch in Pakistan to receive Inward Foreign Remittances. Customers can now receive remittances in an easy & hassle-free manne​r​.",
    },
  ];
  const saving = [
    {
      id: 1,
      cardImg: "../images/sa1.png",
      cardTitle: "Saving Accounts Overview ",
      cardText:
        "An ideal account for anyone who wants to keep aside some extra funds for emergencies. Rather than keeping large amounts of money at home, HBL’s Savings Account allows you to secure your savings with us, providing principal security as well as a modest profit rate.",
    },
    {
      id: 2,
      cardImg: "../images/sa2.png",
      cardTitle: "HBL PLS SavingsAccount  ",
      cardText:
        "HBL PLS Savings Account can help you earn returns on your savings by semi-annual profit payout. The account offers easy access to your deposits.​​​​​",
    },
    {
      id: 3,
      cardImg: "../images/sa3.png",
      cardTitle: "HBL Daily ProgressiveAccount  ",
      cardText:
        "A savings account for business entities that offer lucrative rate of returns.      ",
    },
    {
      id: 4,
      cardImg: "../images/sa4.png",
      cardTitle: "HBL Daily MunafaAccount ",
      cardText:
        " The perfect account for individuals and institutions with high transactional requirements, HBL’s Daily Munafa Account provides you attractive profit rates monthly, while allowing you to bank with flexibility.",
    },
    {
      id: 5,
      cardImg: "../images/sa5.png",
      cardTitle: "HBL ValueAccount  ",
      cardText:
        " The ideal savings account for small business owners and housewives seeking great value. HBL value account allows you to manage your expenses while enabling you to multiply your savings. It is an account that is easy to open and even easier to manage. ",
    },
    {
      id: 6,
      cardImg: "../images/sa6.png",
      cardTitle: "HBL MoneyClub  ",
      cardText:
        "HBL MoneyClub, a savings account for children under 18 years, inculcates the importance of saving and managing funds at an early stage in life. It also helps children earn profit and grow their money along the way",
    },
    {
      id: 7,
      cardImg: "../images/sa7.png",
      cardTitle: "HBL Rutba",
      cardText:
        " HBL Rutba, an account ideal for people aged 55 years and above. A perfect option for those who wish to attain financial independence and lead a stress-free life post retirement.",
    },
    {
      id: 8,
      cardImg: "../images/sa8.png",
      cardTitle: "eHBL Foreign Currency SavingsAccount",
      cardText:
        "An account for all those individuals who wish to maintain their savings in foreign currency. HBL Foreign Currency SavingsAccount is the ideal choice allowing you to save with ease while offering convenience and reliability for Pakistanis as well as foreign nationals dealing in foreign currencies. ",
    },
  ];
  const term = [
    {
      id: 1,
      cardImg: "../images/tr1.png",
      cardTitle: "Term Deposit Accounts Overview ",
      cardText:
        "Term Deposits are booked by investors having an appetite for short/ long term investment horizons. ",
    },
    {
      id: 2,
      cardImg: "../images/tr2.png",
      cardTitle: "High Yield Foreign FixedDeposit",
      cardText:
        "HBL offers the High Yield Foreign Fixed Deposit Account for individuals and institutions who wish to maintain secure foreign currency deposits and earn attractive returns on their foreign currency deposits.   ​​​​​",
    },
    {
      id: 3,
      cardImg: "../images/tr3.png",
      cardTitle: "HBL Investment PlusDeposit (IPD) ",
      cardText:
        "InvestmentPlusDeposit (IPD) is a non-rate sheet product with special rates approved from treasury on a daily basis. It is suitable for high net worth individuals and corporates looking for competitive profit rates.",
    },
    {
      id: 4,
      cardImg: "../images/sa4.png",
      cardTitle: "HBL NoticeDeposit (ND) ",
      cardText:
        "​HBL NoticeDeposit fulﬁls your short term investment needs by providing you with an investment opportunity at attractive rates that allow access to funds on short notice. Suitable for individuals who want to earn a high return on their short term investments.",
    },
    {
      id: 5,
      cardImg: "../images/tr5.png",
      cardTitle: "HBL AdvantagePlus",
      cardText:
        "​ HBL Advantage Plus Account gives you a flexible investment product that provides multiple profit payouts and tenures of your choice.",
    },
    {
      id: 6,
      cardImg: "../images/tr6.png",
      cardTitle: "HBL AdvantageAccount ",
      cardText:
        "For those looking for short, medium and long-term investment opportunities with a fixed profit rate, the HBL Advantage Account gives you a flexible investment product that provides multiple profit payouts and tenures of your choice",
    },
  ];
  const value = [
    {
      id: 1,
      cardImg: "../images/val1.png",
      cardTitle: "HBL BankingAlerts ",
      cardText:
        "HBL BankingAlerts allows you to stay updated on your account activity such as change in balance, new deposit confirmations, cheque’s status and also provides notifications when you use your HBL DebitCard.",
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
              ACCOUNTS
            </h1>
            <p className="d_para display-1 mt-5 text-center">
              Choose the account that matches your needs
            </p>
            <p className="display-6 mt-4 text-center ">
              We have a fine range of accounts to help you manage your finances
              seamlessly
            </p>
          </div>
          <div className="right" data-aos="slide-left">
            <img src="../images/acc1.png" alt="" className="right_img" />
          </div>
        </section>
        <hr />
        <div className="container">
          <section className="container">
            <h1 className="disp display-1 my-5">CURRENT</h1>
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
        <div className="container">
          <section className="container">
            <h1 className="disp display-1 my-5">SAVING</h1>
          </section>
        </div>
        <div className="card_container container my-5">
          {saving.map((elem) => {
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
        <div className="container">
          <section className="container">
            <h1 className="disp display-1 my-5">TERM DEPOSIT</h1>
          </section>
        </div>
        <div className="card_container container my-5">
          {term.map((elem) => {
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
        <div className="container">
          <section className="container">
            <h1 className="disp display-1 my-5">VALUE ADDED</h1>
          </section>
        </div>
        <div className="card_container container my-5">
          {value.map((elem) => {
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
      </div>
    </>
  );
};
