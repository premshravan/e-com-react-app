import React, { useState } from "react";

const SortDropDown = ({ products,setSortedProducts }) => {
  const [sort, setSort] = useState("");
  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
    let sortedProducts = [...products];
    switch (value) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-dec":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-dec":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    setSortedProducts ( sortedProducts) //update the sorted products
  };
  return (
    <div className="">
      <select id="sort" value={sort} onChange={handleSort} className="rounded py-1 px-1 focus:outline-none ">
        <option value="">Select...</option>
        <option value="price-asc">Price:Low to High</option>
        <option value="price-dec">Price:High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-dec">Name: Z to A</option>
      </select>
    </div>
  );
};

export default SortDropDown;
