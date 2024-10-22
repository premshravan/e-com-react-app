import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.images[0],
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload; // Destructuring the item ID and new quantity from the action payload
      const existingItem = state.items.find((item) => item.id === id); // Finding the item to update in the cart
      if (existingItem) {
        const priceDiff =
          existingItem.price * (quantity - existingItem.quantity); // Calculate price difference  based on the quantity change.
        state.totalAmount += priceDiff; // Adjust the total amount of the cart
        state.totalQuantity += quantity - existingItem.quantity; // Adjust the total quantity in the cart

        existingItem.quantity = quantity; // Update the item's quantity in the cart
        existingItem.totalPrice = existingItem.price * quantity; // Update the total price for this item
      }
    },
  },
});
export const { addToCart, removeFromCart, clearCart, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
