import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { removeFromWishList } from "../../slices/wishListSlice";
import News from "../../components/NewsLetter/News";
const Wishlist = () => {
  const WishlistItems = useSelector((state) => state.wishlist.items);
  const totalQuantity = useSelector((state) => state.wishlist.totalQuantity);

  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromWishList(id));
  };
  return (
    <div className="w-ful h-full flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl p-2 font-bold">My Wishlist</h1>
      <div className="w-11/12 min-h-[50vh]">
        <table className="w-full h-full">
          <thead className=" bg-gray-400">
            <tr className="font-bold">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Price</th>
              <th className="py-2"> Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-500 text-white">
            {WishlistItems.length > 0 ? (
              WishlistItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-700">
                  <th className="py-2">{item.id}</th>
                  <th className="py-2">{item.name}</th>

                  <th className="py-2">Rs.{item.price}/-</th>
                  <th className="py-2">
                    {" "}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-400  opacity-50 group-hover:opacity-100"
                    >
                      <FaRegTrashCan />
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <tr className=" text-center">
                <td className="py-5" colSpan={5}>
                  <h1>Wishlist is Empty</h1>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="bg-yellow-400 w-full">
            <tr className="w-full ">
              <td className=" py-1 " colSpan={5}>
                Total Qty :{totalQuantity}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="w-11/12 py-5">
        <News/>
      </div>
    </div>
  );
};

export default Wishlist;
