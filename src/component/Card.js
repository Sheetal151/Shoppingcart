import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './reduxs/productsSlice';
import { addToCart} from '../../src/component/reduxs/cardSlice';

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
 // const error = useSelector((state) => state.products.error);
  
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (status === 'succeeded') {
      setFiltered(products);
      extractCategories(products);
    }
  }, [products, status]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const extractCategories = (products) => {
    const categorySet = new Set(products.map((product) => product.category));
    setCategories(['All', ...categorySet]);
  };

  const SearchData = (e) => {
    setSearch(e.target.value);
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(filteredData);
  };

  const filterByCategory = (category) => {
    if (category === 'All') {
      setFiltered(products);
    } else {
      const filteredData = products.filter((product) => product.category === category);
      setFiltered(filteredData);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
 
 

  return (
    <div className="container mx-auto p-4 bg-pink-100">
      <div className="mb-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={SearchData}
          className="p-2 border border-black rounded-full w-1/2 shadow-lg"
        />
      </div>

      <div className="mb-4 flex items-center justify-center text-bold">
        {categories.map((category) => (
          <button
            key={category}
            className=" bg-gray-100 rounded-lg p-2 m-2 border border-pink-400 font-bold shadow-lg"
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-4 ">
        {filtered.map((product) => (
          <div key={product.id} className="p-4 border border-gray-300 rounded-lg shadow-lg bg-fuchsia-100
          ">
            <h3 className="text-lg font-bold mb-2">Title: {product.title}</h3>
            <p className="mb-2">Description: {product.description}</p>
            <p className="mb-2">Price: ${product.price}</p>
            <p className="mb-2">Category: {product.category}</p>
            <img
              classNam="h-50 w-full object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <button
              className=" bg-pink-400 h-10 m-2 border border-black"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
