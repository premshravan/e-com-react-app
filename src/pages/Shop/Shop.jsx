import React from "react";

import ShopLists from "../../components/Shop/ShopLists";
import News from "../../components/NewsLetter/News";

const Shop = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-11/12 py-4">
        <ShopLists />
      </div>
      <div className="w-11/12 py-5">
        <News />
      </div>
    </div>
  );
};

export default Shop;
