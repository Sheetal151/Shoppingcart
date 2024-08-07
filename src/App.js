import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Card2 from "./component/Card2";
import Card from "./component/Card";
//import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
<FaCartPlus />;

const App = () => {
  const cartItems = useSelector((state) => state?.cart?.cart);
  return (
    <div>
      <Router>
        <div className="">
          <nav className="p-2 h-14 bg-pink-400 text-white font-bold flex items-center justify-end text-xl">
            <Link to="/" className="m-4">
              Home
            </Link>
            <Link to="/cart" className="flex items-center">
              <FaCartPlus size={30} className="mr-2" />
              <span>({cartItems.length})</span>
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/cart" element={<Card2 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
