import React from "react";
import { useCart } from "../Context/CartContext.jsx";

const Products = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, title: "T-Shirt", price: 30, image: "https://via.placeholder.com/400" },
    { id: 2, title: "Shoes", price: 80, image: "https://via.placeholder.com/400" },
    { id: 3, title: "Watch", price: 60, image: "https://via.placeholder.com/400" },
  ];

  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Products</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="shadow-lg rounded-lg p-4">
            <img src={product.image} alt={product.title} className="rounded mb-4" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
