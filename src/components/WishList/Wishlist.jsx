import React, { useState } from "react";

import {FaRegHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../slices/wishListSlice";
import { FaRegTrashCan } from "react-icons/fa6";

const WishList = () => {
  const [open, setOpen] = useState(false);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromWishList(id));
  };
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-lime-300 p-2 rounded-full relative hover:scale-110 cursor-pointer flex justify-center items-center transition-all duration-300 ease-linear"
      >
        <span className="text-sm absolute bg-red-500 -top-3 -right-2 rounded-full h-5 w-5 text-white">
          {wishlistItems.length}
        </span>
        <FaRegHeart />
      </button>
      <div
        className={`w-full fixed top-0 right-0 ${
          open ? "block" : "hidden"
        } h-screen max-h-screen z-50`}
      >
        <div
          className={`bg-white h-full ${
            open ? "transalte-x-0" : "translate-x-full"
          } w-full ml-auto max-w-sm  z-30 relative`}
        >
          <div className="w-full flex justify-center items-center px-3 py-2">
            <div className="w-11/12">
              <h1 className="font-bold">My Wishlist</h1>
            </div>
            <div className="w-1/12">
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="p-1 rounded bg-gray-600 text-white"
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
          <div className="w-full p-3">
            {wishlistItems.length > 0 ? (
              <ul>
                {wishlistItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-center group cursor-pointer my-2 items-center gap-4 bg-gray-200 px-2 py-3"
                  >
                    <div className="w-24 h-24 overflow-hidden  ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">{item.name}</h1>
                      <h4 className="text-lime-400 text-sm py-2">
                        Rs.{item.price}/-
                      </h4>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-400  opacity-50 group-hover:opacity-100"
                      >
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <h2 className="text-lg font-bold">Your wishlist is Empty</h2>
              </div>
            )}
          </div>
        </div>
        <div
          className={`h-full w-full z-20 bg-gray-400 ${
            open ? "transalte-x-0" : "translate-x-full"
          } top-0 fixed  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0`}
        ></div>
      </div>
    </div>
  );
};

export default WishList;
