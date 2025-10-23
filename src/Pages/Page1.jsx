import React from 'react';

const products = [
  {
    id: 1,
    title: 'Europeana',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1720031995283-050b2e821488?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1956',
  },
  {
    id: 2,
    title: 'Urban Sneakers',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1623609163915-d21853ad7d0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=667',
  },
  {
    id: 3,
    title: 'Vintage Sunglasses',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1728485299033-a3b6e98cb5b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
  {
    id: 4,
    title: 'Denim Jeans',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1589400363677-81704324e25b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
  {
    id: 5,
    title: 'Street Hoodie',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Leather Bag',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1593032465171-d7b53c3b00c6?auto=format&fit=crop&w=800&q=80',
  },
];

const Products = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={product.image} alt={product.title} className="w-full h-110 object-cover" />
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
