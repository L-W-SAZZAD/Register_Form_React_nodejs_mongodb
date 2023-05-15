import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { ScaleLoader } from "react-spinners";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);

  //   pages
  const allPages = Math.ceil(count / pages);
  const getProducts = async () => {
    try {
      setLoading(true);
      fetch(`http://localhost:9000/product?page=${pageNumber}&size=${pages}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data?.data);
          setCount(data?.count);
          setLoading(false);
        });
    } catch (error) {
      console.log(error.messsage);
    }
  };
  useEffect(() => {
    getProducts();
  }, [pageNumber, pages]);
  return (
    <div>
      {loading ? (
        <div className=" flex justify-center items-center h-screen">
          <ScaleLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="lg:w-[1240px] lg:mx-auto w-full lg:px-0 md:px-2 sm:px-3 px-3 py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 ">
          {products?.map((product) => (
            <SingleProduct
              key={product._id}
              product={product}
              loading={loading}
            />
          ))}
        </div>
      )}
      <div className=" flex justify-center items-center">
        <p className="pr-4">page:{pageNumber}</p>
        {[...Array(parseInt(allPages)).keys()].map((countItem) => {
          return (
            <button
              onClick={() => setPageNumber(countItem)}
              className={`text-white bg-slate-500 px-3 py-1 rounded-md mr-4 focus:bg-red-400`}
            >
              {countItem}
            </button>
          );
        })}
        <select onChange={(event) => setPages(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}
