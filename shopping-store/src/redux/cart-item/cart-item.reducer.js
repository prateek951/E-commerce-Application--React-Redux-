import { CartItemActionTypes } from './cart-item.types';
import { addItemToCart } from './cart.utils';
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
    default:
      return state;
  }
};

export default cartItemReducer;
