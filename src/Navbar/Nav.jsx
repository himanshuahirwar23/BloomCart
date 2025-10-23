import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-thin  flex items-center">
        <span className="hidden md:block text-[20px] mr-2">乃匚</span> ｂｌｏｏｍ X ｃａｒｔ
      </div>

      {/* Desktop Search - hidden on small screens */}
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
        <div className="flex items-center cursor-pointer">
          <CiShoppingCart className="w-7 h-7" />
          <span className="ml-1">0</span>
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
            <div className="flex items-center cursor-pointer">
              <CiShoppingCart className="w-7 h-7" />
              <span className="ml-1">0</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
