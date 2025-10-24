import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-l font-bold text-white mb-4">
            <span className="text-[20px] mr-2">乃匚</span> ｂｌｏｏｍ X ｃａｒｔ
          </h1>
          <p className="text-sm text-gray-400 leading-6">
            Discover your own style with Bloom X Cart.  
            Unique pieces, sustainable fashion, and timeless beauty.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">All Products</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition">Sale</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Be the first to know about new collections and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l bg-gray-100 text-black focus:outline-none"
            />
            <button className="bg-white text-black font-semibold px-4 rounded-r hover:bg-gray-200 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bloom X Cart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
