import ShopActionTypes from './shop.types';
import { SHOP_DATA } from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
