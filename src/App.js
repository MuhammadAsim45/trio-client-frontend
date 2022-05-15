import React from "react";
import { About } from "./components/About";
import { Root } from "./components/Root";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Trio } from "./components/Trio";
import { Home } from "./components/Home";
import { Marketing } from "./components/Marketing";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router";
import "./App.css";
function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Features" element={<Features />}></Route>
        <Route path="/Trio" element={<Trio />}></Route>
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
