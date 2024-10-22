import React from "react";
import Hero from "../../components/Home/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import OfferBanners from "../../components/OfferBanner/OfferBanners";
import BestSeller from "../../components/BestSeller/BestSeller";
import News from "../../components/NewsLetter/News";


const Home = () => {
  return (
    <div className="text-white w-full h-full  flex flex-col justify-center items-center ">
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-11/12 p-4">
        <div className="title_container py-2">
          <h1 className="title font-bold text-center text-2xl">
            Find Your Style :Furniture Categories
          </h1>
        </div>
        <Categories />
      </div>
      <div className="w-11/12 p-4">
        <div className="title_container py-3">
          <h1 className="title font-bold text-center text-2xl">
            Discover Our Featured Products
          </h1>
        </div>
        <FeaturedProducts />
      </div>
      <div className="w-11/12 py-5">
        <OfferBanners />
      </div>
      <div className="w-11/12 p-4">
        <div className="title_container py-3">
          <h1 className="title font-bold text-center text-2xl">
            Best sold Products :
          </h1>
        </div>
        <BestSeller />
      </div>
      <div className="w-11/12 p-4">
        
        <News />
        
      </div>
      
    </div>
  );
};

export default Home;
