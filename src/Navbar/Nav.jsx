import React, { useState, useEffect } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useCart } from "../Context/CartContext.jsx"; // ✅ import CartContext

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ get cart data from context
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-black text-white px-6 py-3 flex items-center justify-between fixed w-full top-0 z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="text-xl font-thin flex items-center">
        <span className="hidden md:block text-[20px] mr-2">乃匚</span>
        ｂｌｏｏｍ X ｃａｒｔ
      </div>

      {/* Desktop Search */}
      <div className="hidden md:block flex-1 mx-6">
        <input
          type="text"
          placeholder="Search anything here..."
          className="w-full max-w-md px-4 py-2 rounded-sm bg-gray-100 text-black focus:outline-none"
        />
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center space-x-6 text-xl">
        <FaRegUser className="w-6 h-6 cursor-pointer" />
        <CiHeart className="w-7 h-7 cursor-pointer" />
        <div className="relative flex items-center cursor-pointer">
          <CiShoppingCart className="w-7 h-7" />
          {/* ✅ dynamic cart count */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2 py-[1px]">
              {totalItems}
            </span>
          )}
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-white text-3xl focus:outline-none"
        >
          <CgMenuLeft />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black px-6 py-4 flex flex-col space-y-4 md:hidden">
          <input
            type="text"
            placeholder="Search anything here..."
            className="px-4 py-2 rounded-sm bg-gray-100 text-black focus:outline-none"
          />
          <div className="flex items-center space-x-6 text-xl">
            <FaRegUser className="w-6 h-6 cursor-pointer" />
            <CiHeart className="w-7 h-7 cursor-pointer" />
            <div className="relative flex items-center cursor-pointer">
              <CiShoppingCart className="w-7 h-7" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2 py-[1px]">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
