import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { cartContext } from "../Context/CartContext";
import { FaArrowLeft } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(cartContext);

  //getthe single product based on the is
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  //if the product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-10  flex items-center  h-[140vh]">
      <div className=" container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div className="mb-8 mx-[70px]">
            <img
              className="max-w-[200px] lg:max-w-{300px]"
              src={image}
              alt=""
            />
          </div>
          <div className=" flex-1 text-center lg:text-left ">
            <h1 className="text-[26px] font-medium mb-2 m-6 ">{title}</h1>
            <div className="text-xl text-red-500 m-6 font-medium">
              $ {price}
            </div>
            <p className=" m-6">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-gray-600 py-4 px-8 m-6 text-white font-medium"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
