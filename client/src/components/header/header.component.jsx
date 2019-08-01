import React from 'react';
import './header.styles.scss';
import { ReactComponent as ApplicationLogo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart-item/cart.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const onLogout = () => {
    signOutStart();
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <ApplicationLogo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={onLogout}>
            Logout
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Login</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOutStart: () => {
      dispatch(signOutStart());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
