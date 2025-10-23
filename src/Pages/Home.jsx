import React from 'react';

const Home = ({ onShopClick }) => {
  return (
    <div className="relative bg-amber-200 h-[90vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974"
        alt="Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 w-[200px] h-[400px] ml-10 mt-50 items-center text-stone-100">
        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-lg">
          Unleash <br /> Madness
        </h1>

        <button
          onClick={onShopClick}
          className="px-6 py-3 mt-5 cursor-pointer bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
