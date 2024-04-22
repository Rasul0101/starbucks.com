// import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Drinks from "./pages/Menu/Drinks";
import Rewards from "./pages/Rewards/Rewards";
import FindStore from "./pages/FindStore/FindStore";

import OurCompany from "./pages/OurCompany/OurCompany";
import OurCoffee from "./pages/OurCoffee/OurCoffee";
import CustomerService from "./pages/CustomerService/CustomerService";
import People from "./pages/People/People";
import Planet from "./pages/Planet/Planet";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

// Main Context
import MainContextProvider from "./utils/MainContext";

const App = () => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  // excluded
  const excludedFooter = ["/find-store", "/customer-service"];
  const excludedHeader = ["/customer-service"];

  useEffect(() => {
    setShowFooter(!excludedFooter.includes(location.pathname));
    setShowHeader(!excludedHeader.includes(location.pathname));
  }, [location.pathname]);

  return (
    <MainContextProvider>
      {showHeader && <Header />}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/menu/drinks/:id" element={<Drinks />} />
          <Route exact path="/rewards" element={<Rewards />} />
          <Route exact path="/find-store" element={<FindStore />} />

          <Route exact path="/about-us" element={<OurCompany />} />
          <Route exact path="/our-coffee" element={<OurCoffee />} />
          <Route exact path="/customer-service" element={<CustomerService />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/planet" element={<Planet />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </MainContextProvider>
  );
};

export default App;
