import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((netQuantity, cartItem) => {
      netQuantity += cartItem.quantity;
      return netQuantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((netCartTotal, cartItem) => {
      netCartTotal += cartItem.price * cartItem.quantity;
      return netCartTotal;
    }, 0)
);
