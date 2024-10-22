import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { FaArrowRightLong } from "react-icons/fa6";

const BestSeller = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/products/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response have Error");
        }
        return response.json();
      })
      .then((data) => setData(data.products))
      .catch((error) => console.log("Error", error));
  },[]);

  return (
    <>
      <div className="w-full  gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid py-2">
        {data.length > 0 &&
          data.slice(5,12).map((product) => (
            <div key={product.id}>
              <ProductsCard product={product} />
            </div>
          ))}
      </div>
      <div className="flex justify-center w-full">
        <button className="flex justify-center items-center gap-2 mx-auto font-bold hover:text-lime-400">
          View More
          <FaArrowRightLong />
        </button>
      </div>
    </>
  );
};

export default BestSeller;
