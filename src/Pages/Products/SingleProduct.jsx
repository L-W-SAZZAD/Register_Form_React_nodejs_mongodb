import React from "react";

export default function SingleProduct({ product }) {
  const { name, img, price } = product;
  return (
    <div className=" shadow-md shadow-red-500 px-4 bg-black rounded-md lg:mb-0 md:mb-0 sm:mb-4 mb-4">
      <div className="single_product">
        <h2 className=" text-xs py-2 tracking-tight font-thin text-white">
          {name}
        </h2>
        <img
          className="w-full h-[250px] rounded-md"
          src={img ? img : "no Found"}
          alt=""
        />
        <p className="text-white py-1">Price: {price} Taka</p>
      </div>
      <button className="text-white px-7 rounded-md py-2 shadow-md shadow-red-500 my-2 focus:bg-red-500">
        Details
      </button>
    </div>
  );
}
