import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeButton, setActiveButton] = useState("all");

  useEffect(() => {
    filterProductsByCategory("all");
  }, []);

  const filterProductsByCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
    setActiveButton(category);
  };

  return (
    <div>
      <div className="py-[140px]">
        <div className="container mx-auto">
          <div>
            <ul className="lg:flex my-8  lg:justify-center md:flex md:flex-wrap  w-full md:w-auto  transition-all duration-500 ease-in">
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <button
                  className={` text-gray-500 hover:text-gray-400 duration-500 btn ${
                    activeButton === "all"
                      ? "bg-black text-white h-[38px] w-[140px]"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => filterProductsByCategory("all")}
                >
                  All Products
                </button>
              </li>

              <li className="md:ml-8  md:my-0 my-7">
                <button
                  className={` text-gray-500 hover:text-gray-400 duration-500 btn ${
                    activeButton === "electronics"
                      ? "bg-black text-white h-[38px] w-[140px] text-2xl"
                      : "bg-transparent text-black text-2xl"
                  }`}
                  onClick={() => filterProductsByCategory("electronics")}
                >
                  Electronics
                </button>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <button
                  className={` text-gray-500 hover:text-gray-400 duration-500 btn ${
                    activeButton === "men's clothing"
                      ? "bg-black text-white h-[38px] w-[140px]"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => filterProductsByCategory("men's clothing")}
                >
                  Men Clothes
                </button>
              </li>

              <li className="md:ml-8 text-xl md:my-0 my-7">
                <button
                  className={` text-gray-500 hover:text-gray-400 duration-500  btn ${
                    activeButton === "women's clothing"
                      ? "bg-black text-white h-[38px] w-[180px]"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => filterProductsByCategory("women's clothing")}
                >
                  Women Clothes
                </button>
              </li>

              <li className="md:ml-8 text-xl md:my-0 my-7">
                <button
                  className={` text-gray-500 hover:text-gray-400 duration-500 md:mx-6 btn ${
                    activeButton === "jewelery"
                      ? "bg-black text-white h-[38px] w-[140px]"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => filterProductsByCategory("jewelery")}
                >
                  Jewelery
                </button>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
