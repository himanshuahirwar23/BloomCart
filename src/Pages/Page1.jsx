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
    title: 'Urban ',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1623609163915-d21853ad7d0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=667',
  },
  {
    id: 3,
    title: 'Vintage ',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1728485299033-a3b6e98cb5b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
  {
    id: 4,
    title: 'dress4',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1589400363677-81704324e25b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
  {
    id: 5,
    title: ' dress5',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1709281961493-a9acb8558177?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976',
  },
  {
    id: 6,
    title: 'dress6',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1658955924468-a4ee5fa6aeb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
  },
  {
    id: 7,
    title: 'dress7',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1687935786673-92bdf92c0737?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964',
  },
  {
    id: 8,
    title: 'dress8',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1754299257780-71fd1f741cf2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
  },
  {
    id: 9,
    title: 'dress9',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1589400363677-81704324e25b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
  },
  {
    id: 10,
    title: 'dress10',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1700064990923-b1af57cf58db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
  },
  {
    id: 11,
    title: 'dress11',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
  },
  {
    id: 12,
    title: 'dress12',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1726491080347-9f8e16e9aad0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2127',
  },
  {
    id: 13,
    title: 'dress13',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1748851261896-018e96a59f3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964  ',
  },
  {
    id: 14,
    title: 'dress14',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1626412719091-a92d48f70c24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1944',
  },
  {
    id: 15,
    title: 'dress15',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1708983971371-57a17ea4373d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1960',
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
