import React, { useContext, useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
//cart context
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);

  const { itemAmount } = useContext(cartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <div className="">
      <div
        className={`${
          isActive
            ? "bg-white py-3 h-[80px] shadow-md"
            : "bg-white border-b py-3 h-[80px]"
        } fixed w-full  z-10 transition-all`}
      >
        <div className="  flex justify-between items-center mb-[80px]">
          <div className="my-2 mx-[50px]">
            <Link to={"/"}>
              {" "}
              <h2 className="sm:text-1xl md:text-3xl lg:text-3xl xl:text-6xl text-2xl font-bold uppercase">shop</h2>            </Link>
          </div>
          <div className="cursor-pointer flex items-center mr-[50px]">
            <Link to={"/cart"}>
              <FaBagShopping className="text-4xl" />
            </Link>
            <div className="bg-red-500 absolute right-[50px] top-11 text-[12px] h-[18px] w-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

    </div>
  );
};

export default Header;
