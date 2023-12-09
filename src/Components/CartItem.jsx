import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { cartContext } from "../Context/CartContext";
const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;

  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(cartContext);

  return (
    <div className="">
      <div className="">
        <div className="sm:w-auto md:flex md:flex-row lg:flex lg:flex-row w-full my-4 flex flex-col items-center justify-between gap-x-6 border shadow-md  ">
        <div>
           {/* image */}
           <Link to={`/product/${id}`}>
          <img className="max-w-[70px] m-3" src={image} alt="" />
        </Link>
      </div>
          {/* title */}
          <div className="my-3">
            <Link
              to={`/product/${id}`}
              className="sm:text-center "
            >
              {title}
            </Link>
         
          </div>
          <div className=" flex flex-col justify-around items-center mx-2 text-red-500 my-1 text-[18px] font-medium">
              
              $ {price}
            </div>
          <div className="flex items-center w-[100px] h-[40px] border my-3 ">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center  text-md cursor-pointer "
              >
                <TiMinus />
              </div>
              <div className="h-full flex justify-center items-center text-xl px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 flex justify-center items-center text-md cursor-pointer "
              >
                <FaPlus />
              </div>
            </div>
          
            {/* final price */}
            <div className="flrx-1 flex justify-center mx-[25px] items-center text-[18px] my-1 text-black font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
            <div
              onClick={() => removeFromCart(id)}
              className="cursor-pointer text-3xl my-2"
            >
              <MdDeleteForever className=" text-red-500 transition text  mx-2" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default CartItem;
