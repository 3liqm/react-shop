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
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 border shadow-md my-3">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] mx-2" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col ">
          {/* title & remove icon */}
          <div className="flex justify-between items-center mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium text-primary hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="cursor-pointer text-3xl"
            >
              <MdDeleteForever className=" text-red-500 transition text  mx-2" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full font-medium border">
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
            <div className="flrx-1 flex justify-around items-center mx-2 text-red-500  text-[18px] font-medium">
              {price}
            </div>
            {/* final price */}
            <div className="flrx-1 flex justify-center mx-[25px] items-center text-[18px]  text-black font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
