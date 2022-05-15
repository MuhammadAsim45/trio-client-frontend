import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "../../node_modules/react-icons/fa";
import { FaTimes } from "../../node_modules/react-icons/fa";
export const Navbar = () => {
  const [state, setstate] = useState(true);

  return (
    <>
      <div className="navbar shadow">
        <div className="logo">
          <Link to="/">
            <img src="../images/logo.png" alt="" id="logo" />
          </Link>
        </div>
        <div className={state ? "nav " : "nav active"}>
          <Link className="link" to="/home" onClick={() => setstate(true)}>
            Home
          </Link>
          <Link className="link" to="/Features" onClick={() => setstate(true)}>
            Features
          </Link>
          <Link className="link" to="/Trio" onClick={() => setstate(true)}>
            Why Trio?
          </Link>
          <Link className="link" to="/marketing" onClick={() => setstate(true)}>
            Marketing tools
          </Link>
          <Link className="link" to="/About" onClick={() => setstate(true)}>
            About Us
          </Link>
          <Link className="link" to="/Contact" onClick={() => setstate(true)}>
            Contact
          </Link>
        </div>
        <div className="rightnav">
          <button className="login {variable}">SIGN UP</button>

          <button className="login {variable}">LOGIN</button>
          <i className="menu icon">
            {state ? (
              <FaBars onClick={() => setstate(false)} />
            ) : (
              <FaTimes onClick={() => setstate(true)} />
            )}
          </i>
        </div>
      </div>
    </>
  );
};
