import { CartItemActionTypes } from './cart-item.types';

export const toggleDropdown = () => {
  return {
    type: CartItemActionTypes.TOGGLE_DROPDOWN
  };
};
