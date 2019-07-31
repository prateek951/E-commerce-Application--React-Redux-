import { CartItemActionTypes } from './cart-item.types';

export const toggleDropdown = () => {
  return {
    type: CartItemActionTypes.TOGGLE_DROPDOWN
  };
};

export const addItem = item => {
  return {
    type: CartItemActionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeCartItem = cartItemToRemove => {
  return {
    type: CartItemActionTypes.REMOVE_ITEM,
    payload: cartItemToRemove
  };
};

export const decreaseCartItemQuantity = cartItem => {
  return {
    type: CartItemActionTypes.DECREASE_CART_ITEM_QUANTITY,
    payload: cartItem
  };
};

export const clearCart = () => {
  return {
    type: CartItemActionTypes.CLEAR_CART
  };
};
