import React, { useRef } from "react";
import { CartProvider } from "./Context/CartContext.jsx";
import Home from "./Pages/Home";
import { Nav } from "./Navbar/Nav";
import Products from "./Pages/Page1";
import CartPage from "./CartProduct/Cartpage";
import Footer from "./Footer/Footer";

function App() {
  const shopRef = useRef(null);
  const scrollToShop = () => shopRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <CartProvider>
      <Nav />
      <Home onShopClick={scrollToShop} />
      <div ref={shopRef}>
        <Products />
        <CartPage />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
