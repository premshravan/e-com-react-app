import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-lime-300 p-2 rounded-full hover:scale-110 cursor-pointer flex justify-center items-center transition-all duration-300 ease-linear relative"
      >
        <span className="absolute text-sm -top-3 -right-3 h-5 w-5 rounded-full text-white bg-red-500 justify-center items-center">
          {cartItems.length}
        </span>
        <RiShoppingCartLine />
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
              <h1 className="font-bold">My Cart</h1>
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
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
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
                <h2 className="text-lg font-bold">Its Empty</h2>
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

export default Cart;
