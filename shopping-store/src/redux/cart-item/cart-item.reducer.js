import { CartItemActionTypes } from './cart-item.types';

const INITIAL_STATE = {
  hidden: true
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
    default:
      return state;
  }
};

export default cartItemReducer;
