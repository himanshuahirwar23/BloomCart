import React from "react";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  if (cartItems.length === 0)
    return <h2 className="text-center text-2xl mt-10">🛒 Your cart is empty</h2>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between py-4 border-b">
          <div className="flex gap-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 rounded" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <button
          onClick={clearCart}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
