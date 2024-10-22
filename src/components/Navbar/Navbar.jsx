import React from "react";

import { Link } from "react-router-dom";
import Cart from "../CartSet/Cart";
import WishList from "../WishList/Wishlist";
import { IoHomeOutline } from "react-icons/io5";
import { BsCart4, BsShop } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: <IoHomeOutline />,
  },
  {
    label: "Shop",
    path: "/shop",
    icon: <BsShop />,
  },
  {
    label: "Cart",
    path: "/cart",
    icon: <BsCart4 />,
  },
  {
    label: "Wishlist",
    path: "/wishlist",
    icon: <FaRegHeart />,
  },
];

const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-4 items-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] mb-4 ">
      <div className="w-10/12 flex justify-center items-center px-2 py-4">
        <div className="flex-1">
          <h1 className="logo font-bold text-2xl ">Logo</h1>
        </div>

        <div className="sm:flex-1 sm:w-auto w-full flex sm:relative fixed sm:bottom-auto bottom-0 sm:bg-transparent justify-center items-center bg-white z-50 sm:py-0 py-4">
          <ul className="flex gap-10 sm:justify-center justify-around items-center w-full">
            {navItems.map((item, index) => {
              return (
                <li key={index} className="sm:bg-transparent sm:rounded-none bg-lime-600 sm:p-0 rounded-full p-2 font-bold md:text-2xl ">
                  <Link to={item.path}>
                    <span className="sm:block hidden bg-lime-500 rounded-es-xl px-3 py-1 transition-all ease-linear duration-300 hover:scale-105">{item.label}</span>
                    <span className="sm:hidden block text-2xl">{item.icon}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1 flex gap-6 justify-end items-center text-xl">
          <WishList />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
