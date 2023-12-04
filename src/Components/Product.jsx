import React, { useContext } from "react";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(cartContext);

  const { id, image, category, title, price } = product;

  return (
    <div>
      <Link to={`/product/${id}`}>
        <div className="border border-[#e4e4e4]  h-[300px] mb-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-6 -right-11 p-2 group-hover:right-5 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button>
              <div
                onClick={() => addToCart(product, id)}
                className="flex justify-center items-center bg-red-500 text-white  w-12 h-12"
              >
                <FaCartPlus className="text-2xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="flex justify-center items-center bg-white text-black drop-shadow-xl w-12 h-12"
            >
              <FaEye className="text-2xl" />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-xl capitalize text-gray-400 mb-1">
            {category}
          </div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
          <div className="font-semibold ">$ {price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
