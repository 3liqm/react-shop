import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
  const { cart, clearCart, total, itemAmount } = useContext(cartContext);

  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mt-[100px]">Shopping Cart</h1>
      </div>

      <div className="container mx-auto ">
        <div className="flex flex-col  h-[100%] mt-[50px] mb-[100px]  ">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between  mt-[100px] mb-[60px]">
          <div>
            {" "}
            <button
              className=" bg-red-500 text-white mb-8 font-semibold h-[40px] w-[120px]"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="text-2xl font-semibold ">
            <div className="flex justify-between">
              <span className="text-3xl">Subtotal:</span>{" "}
              <span className="text-red-500 text-2xl">
                $ {parseFloat(total).toFixed(2)}
              </span>
            </div>
            <p className="text-gray-400 text-base mt-1">
              Taxes and shipping caleculated are in Checkout
            </p>
            <button className="bg-gray-400 h-[54px] text-white font-bold mt-3 w-full">
              <Link>Checkout</Link>
            </button>
            <div className="flex items-center mt-4 text-gray-400 text-xl">
              <FaArrowLeft />
              <Link className="mx-4" to={"/"}>
                Coninue Shopping
              </Link>
            </div>
          </div>
        </div>
    
      </div>
    
    </div>
  );
};

export default Cart;
