import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
export const Root = () => {
  const [state, setstate] = useState(true);
  // let imgStyle = {
  //   minHeight: "86vh",
  // };

  let fun1 = () => {
    setstate(true);
  };
  let fun2 = () => {
    setstate(false);
  };
  return (
    <div>
      <div className="container">
        <Carousel variant="dark" className="carouselHeight">
          <Carousel.Item interval={1000} className="carousel ">
            <img
              className="d-block w-100 img-fluid carouselImg"
              src="../images/c1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 className="capHeading">Pakistan Banking Awards</h5>
              <p className="capPara">
                HBL Wins Pakistan’s Best Bank Award at PBA 2021
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-fluid carouselImg"
              src="../images/c2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 className="capHeading">Expo 2020 Dubai</h5>
              <p className="capPara">
                PROUDLY SUPPORTING THE PAKISTAN PAVILION AT EXPO 2020 DUBAI
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-fluid carouselImg "
              src="../images/c3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5 className="capHeading">CELEBRATING 50 YEARS OF HBL PLAZA</h5>
              <p className="capPara">A BUILDING BUILT ON YOUR TRUST</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-fluid carouselImg"
              src="../images/c4.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 className="capHeading">eBanc ROSHAN DIGITAL ACCOUNT</h5>
              <p className="capPara">
                OPEN YOUR ACCOUNT <p>FROM ANYWHERE IN THE WORLD</p>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 img-fluid carouselImg"
              src="../images/c5.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 className="capHeading">Attention</h5>
              <p className="capPara">Never call back on Unknown numbers</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr />
        <section className="mt-5 vh-100 after_carousel">
          <h1 id="rootHeading" className="text-uppercase">
            banking on the go
          </h1>
          <p className="display-6 mt-4 text-center">
            YOUR BANKING EXPERIENCE
            <p className="display-6  ">ANYTIME, ANYWHERE</p>
          </p>
          <div className="button mt-5 mb-5">
            <span
              className={state ? "green " : ""}
              onClick={() => {
                fun1();
              }}
            >
              HBL MOBILE
            </span>
            <span
              className={state ? "" : "green"}
              onClick={() => {
                fun2();
              }}
            >
              KONNECT
            </span>
          </div>
          {state ? (
            <div className="hbl_mobile d-flex align-items-center justify-content-center ">
              <img
                src="../images/m2.jpg"
                alt="hbl mobile"
                className="img-fluid img_mobile"
                data-aos="slide-right"
              />
              <div
                className="right-mobile d-flex flex-column align-items-center justify-content-start "
                data-aos="slide-left"
              >
                <h1 className="mobile_heading ">
                  <h1>HBL MOBILE</h1>
                </h1>
                <p className="display-5 disp text-center">
                  BANKING AT YOUR FINGER TIP
                </p>
                <button className="login btn">download now</button>
              </div>
            </div>
          ) : (
            <div className="hbl_mobile d-flex align-items-center justify-content-center ">
              <img
                src="../images/m1.jpg"
                alt="hbl mobile"
                className="img-fluid img_mobile"
              />
              <div className="right-mobile d-flex flex-column align-items-center justify-content-start ">
                <h1 className="mobile_heading ">
                  <h1>KONNECT</h1>
                </h1>
                <p className="display-5 disp text-center">
                  YOUR PERSONALIZED BANKING EXPERIENCE
                </p>
                <button className="login btn">MORE DETAILS</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
