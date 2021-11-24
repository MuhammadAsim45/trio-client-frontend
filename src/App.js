import React from "react";
import { Loans } from "./components/Loans";
import { Root } from "./components/Root";
import { Wealth } from "./components/Wealth";
import { Accounts } from "./components/Accounts";
import { Cards } from "./components/Cards";
import { Digital_Banking } from "./components/Digital_Banking";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router";
import "./App.css";
function App() {
  return (
    <>
      <nav>
        <Navbar />
        <hr />
      </nav>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/Digital" element={<Digital_Banking />}></Route>
        <Route path="/Accounts" element={<Accounts />}></Route>
        <Route path="/Cards" element={<Cards />}></Route>
        <Route path="/Loans" element={<Loans />}></Route>
        <Route path="/Wealth" element={<Wealth />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
