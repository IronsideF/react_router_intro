import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import ErrorPage from "./components/ErrorPage";
import Choice from "./components/Choice";
import LatestNews from "./components/LatestNews";

const App = () => {
  let initialPricing = [
    { level: "Hobby", cost: 0 },
    { level: "Startup", cost: 10 },
    { level: "Enterprise", cost: 100 }
  ];

  let initialNews = [
    {headline: 'FBI Search Trumps House'},
    {headline: 'Energy Prices to hit £4200'},
    {headline: 'WhatsApp makes ghosting your friends easy'}
  ]
  
  const [pricing, setPricing] = useState(initialPricing);
  const [news, setNews] = useState(initialNews);


  return (
    <Router>
        <NavBar />

      <Routes>
        
        <Route exact path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route
          path="/pricing" exact
          element={ <Pricing prices={pricing} />}
        />
        <Route path="/latestnews" element={<LatestNews news={news} />}/>
        <Route path="/choices/:choice" element={< Choice />} />
        <Route path="*" element={< ErrorPage />}/>
      </ Routes>
    </Router>
  );
}



export default App;