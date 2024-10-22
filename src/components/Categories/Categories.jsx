import React, { useEffect, useState } from "react";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/categories/categories.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data.categories))
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div className="w-full grid lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2  p-5  ">
      {data.length > 0 &&
        data.map((category, index) => (
          <div className="flex flex-col w- justify-center items-center rounded-full hover:scale-110 bg-blue-300 py-6 px-8 cursor-pointer hover:bg-lime-500 transition-all duration-500 ease-linear " key={index}>
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-15 "
            />
            <h1 className="text-black text-nowrap w-full text-center font-bold text-xl">{category.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default Categories;
