import React, { useContext } from "react";
//sidebar context
import { SidebarContext } from "../Context/Sidebarcontext";
import { IoClose } from "react-icons/io5";
import { cartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Slidebar = () => {
  const { isopen, handleClose } = useContext(SidebarContext);

  const { cart, clearCart, total, itemAmount } = useContext(cartContext);

  return (
    <div
      className={`${
        isopen ? "right-0" : "-right-full"
      } w-full h-full bg-white fixed top-0 shadow-2xl transition-all duration-500 z-20 px-4 md:w-[35vw] xl:max-w-[30vw] lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-2xl font-semibold mx-2">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer flex justify-center items-center mx-1"
        >
          <IoClose className="text-2xl " />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[320px]  overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex justify-between items-center my-[30px]  border shadow-md h-[60px]">
        <div className="text-2xl font-semibold mx-2">
          <div>
            <span>Total:</span>{" "}
            <span className="text-gray-500">
              $ {parseFloat(total).toFixed(2)}
            </span>
          </div>
        </div>
        <div
          onClick={clearCart}
          className="text-3xl text-red-500 mx-2 cursor-pointer"
        >
          <MdDeleteForever />
        </div>
      </div>
      <div>
        <button className="cursor-pointer w-full h-[60px] text-xl mb-4 font-medium text-white bg-gray-400">
          <Link to={"/cart"}>View Cart</Link>
        </button>
      </div>
    </div>
  );
};

export default Slidebar;
