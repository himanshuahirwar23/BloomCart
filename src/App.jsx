import React, { useRef } from 'react';
import './App.css';
import Home from './Pages/Home';
import { Nav } from './Navbar/Nav';
import Page1 from './Pages/Page1';
import Footer from './Footer/Footer';

function App() {
  const shopRef = useRef(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav />
      <Home onShopClick={scrollToShop} />
      <div ref={shopRef}>
        <Page1 />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
