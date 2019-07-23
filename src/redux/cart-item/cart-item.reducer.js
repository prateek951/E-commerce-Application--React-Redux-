import { CartItemActionTypes } from './cart-item.types';
import { addItemToCart, removeItemFromCart, decreaseQuantityOfCartItemAndRemove } from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
const cartItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartItemActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartItemActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartItemActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartItemActionTypes.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityOfCartItemAndRemove(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartItemReducer;
