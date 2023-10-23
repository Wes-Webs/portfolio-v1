import './App.css';
import './Components/CSS/LandingPage.css'
import './Components/LandingPage.jsx'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Navigation from './Components/Navigation.jsx';
import NavigationProjects from './Components/NavigationProjects.jsx';
import About from './Components/About.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';
import Projects from './Components/Projects.jsx';
import ShopLocalBanner from './Components/ShopLocalBanner.jsx';
import ShopLocal from './Components/ShopLocal.jsx';
import ShopWowBanner from './Components/ShopWowBanner.jsx';
import ShopWow from './Components/ShopWow.jsx';
import DonutShopBanner from './Components/DonutShopBanner.jsx';
import DonutShop from './Components/DonutShop.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<><Navigation/><LandingPage/><About/><Projects/><Contact/></>}/>
        <Route exact path="/shop-local" element={<><NavigationProjects/><ShopLocalBanner/><ShopLocal/></>}/>
        <Route exact path="/shop-wow" element={<><NavigationProjects/><ShopWowBanner/><ShopWow/></>}/>
        <Route exact path="/donut-shop" element={<><NavigationProjects/><DonutShopBanner/><DonutShop/></>}/>
        <Route exact path="*" element={<><NavigationProjects/><ErrorPage/></>}/>
      </Routes>
      <Footer/>
      <ScrollToTop />
    </div>
  );
}

export default App;
