import React from "react";
import { FaRegTrashCan, FaTrash, FaTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateCart } from "../../slices/cartSlice";
import News from "../../components/NewsLetter/News";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleQtyChange = (id, e) => {
    const newQuantity = parseInt(e.target.value,10);
    dispatch(updateCart({id,quantity:newQuantity}));
  };

  return (
    <div className="w-ful flex-col h-full flex justify-center items-center">
      <h1 className="text-center text-2xl p-2 font-bold">My Cart</h1>
      <div className="w-11/12 min-h-[50vh]">
        <table className="w-full h-full">
          <thead className=" bg-gray-400">
            <tr className="font-bold">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Qty</th>
              <th className="py-2">Price</th>
              <th className="py-2"> Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-500 text-black">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-700 text-center">
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">
                    <input type="number" className="focus:outline-none rounded w-20 bg-yellow-100 px-1 py-1"  value={item.quantity} onChange={(e)=>handleQtyChange(item.id,e)} />
                   
                  </td>
                  <td className="py-2">Rs.{item.price}/-</td>
                  <td className="py-2">
                    {" "}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-400  opacity-50 group-hover:opacity-100"
                    >
                      <FaRegTrashCan />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className=" text-center">
                <td className="py-5" colSpan={5}>
                  <h1>Cart is Empty</h1>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="bg-yellow-400 w-full">
            <tr className="w-full font-bold">
              <td className=" py-1" colSpan={3}>
                Total Qty :{totalQuantity}
              </td>
              <td className=" py-1 text-right text-blue-800 font-bold" colSpan={3}>
                Total Amount : Rs.{totalAmount.toFixed(2)}/-
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end py-2 ">
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="flex gap-2 justify-center items-center text-red-500"
            >
              {" "}
              <FaTrashCan /> Clear the Cart{" "}
            </button>
          )}
        </div>
      </div>
      <div className="w-11/12 py-5">
        <News />
      </div>
    </div>
  );
};

export default Cart;
