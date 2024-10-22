import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { addToWishlist } from "../../slices/wishListSlice";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);
  const handleAddtoCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };
  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="w-full h-full group flex flex-col sm:justify-center items-center">
      <div className="relative overflow-hidden ">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-[280px] w-[280px] cursor-pointer"
        />
        <div className="absolute w-full -bottom-10 group-hover:bottom-1 flex justify-center mb-1 transition-all ease-in-out duration-500 ">
          <button
            onClick={handleAddtoCart}
            className={`${
              isInCart ? "bg-gray-800" : "bg-lime-600 "
            } md:w-11/12 mx-auto py-1  hover:scale-105 rounded block p-2`}
          >
            {isInCart ? "item in cart" : " Add to cart"}
          </button>
        </div>
        <div className="absolute flex flex-col group-hover:left-2 p-2 top-2 -left-10 gap-2 transition-all duration-500 ease-linear text-black ">
          <button
            onClick={handleAddToWishlist}
            className="bg-lime-300 rounded-full p-2 hover:scale-110 hover:bg-lime-600"
          >
            {isInWishlist ? <FaHeart /> : <CiHeart />}
          </button>
          <button className="bg-lime-300 rounded-full hover:scale-110 p-2 hover:bg-lime-600">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="py-3">
        <div className="flex md:justify-evenly gap-32 items-center ">
          <h1 className="font-bold text-black">{product.name}</h1>
          <h4 className="font-bold">Rs {product.price}/-</h4>
        </div>
      </div>
    </div>
  );
};
export default ProductsCard;
