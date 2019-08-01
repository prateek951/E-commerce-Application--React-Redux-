import UserActionTypes from './user.types';

// Google Sign in actions

export const signInWithGoogleStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

// Email sign in actions

export const signInWithEmailAndPasswordStart = emailAndPasswordObj => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPasswordObj
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
export const registerUserStart = userCredentials => ({
  type: UserActionTypes.REGISTER_USER_START,
  payload: userCredentials
});

export const registerUserSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.REGISTER_USER_SUCCESS,
  payload: { user, additionalData }
});

export const registerUserFailure = error => ({
  type: UserActionTypes.REGISTER_USER_FAILURE,
  payload: error
});
