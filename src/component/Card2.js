import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
  decrementItem,
  incrementItem,
} from "../../src/component/reduxs/cardSlice";

const Card2 = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cart?.cart);

  const total = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClear = (product) => {
    dispatch(clearCart(product));
  };
  const handleDec = (product) => {
    dispatch(decrementItem(product));
  };
  const handleInc = (product) => {
    dispatch(incrementItem(product));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Cart Items</h2>
      <button
        className="bg-red-500 text-white rounded-lg p-2 mt-2"
        onClick={handleClear}
      >
        ClearCart
      </button>
      <div className="grid lg:grid-cols-4 gap-4">
        {cartItems?.map((product, index) => (
          <div key={product.index} className="p-4 border border-gray-300">
            <h3 className="text-lg font-bold mb-2">Title: {product?.title}</h3>
            <p className="mb-2">Description: {product.description}</p>
            <p className="mb-2">Price: ${product.price}</p>
            <p className="mb-2">Category: {product.category}</p>

            <img
              className="h-50 w-full object-cover"
              src={product.thumbnail}
              alt={product.title}
            />

            <div className=" flex flex-col">
              {" "}
              <button
                className="bg-blue-500 text-white rounded-lg p-2 mt-2"
                onClick={() => handleInc(product)}
              >
                +
              </button>
              <div>
                <p> quantity:{product.quantity}</p>
              </div>
              <button
                className="bg-blue-500 text-white rounded-lg p-2 mt-2"
                onClick={() => handleDec(product)}
              >
                -
              </button>
              <button
                className="bg-blue-500 text-white rounded-lg p-2 mt-2"
                onClick={() => handleRemoveFromCart(product)}
              >
                remove
              </button>
            </div>
            <p> total: ${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <h1>Total Amount: ${total.toFixed(2)}</h1>

    </div>
  );
};

export default Card2;
