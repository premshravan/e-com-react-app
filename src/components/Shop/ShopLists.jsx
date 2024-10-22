import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import SortDropDown from "../Sort/SortDropDown";

const ShopLists = () => {
  const [data, setData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    fetch("/products/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response have Error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.products);
        setSortedProducts(data.products); // Initialize with unsorted products
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <div className="flex justify-end items-center w-full">
        <SortDropDown products={data} setSortedProducts={setSortedProducts} />
      </div>
      <div className="w-full gap-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-2 ">
        {sortedProducts.length > 0 &&
          sortedProducts.map((product) => (
            <div key={product.id}>
              <ProductsCard product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ShopLists;
