import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  registerUserFailure,
  registerUserSuccess
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    }
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure());
  }
}

export function* signMeOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* registerUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(registerUserSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(registerUserFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* loginAfterRegisteringUser({
  payload: { user, additionalData }
}) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

// 1. First step is always to write saga for a start
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
// 1. First step is always to write saga for a start
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
// 1. First step is always to write saga for a start
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
// 1. First step is always to write saga for a start
export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signMeOut);
}

export function* onRegisterStart() {
  yield takeLatest(UserActionTypes.REGISTER_USER_START, registerUser);
}
export function* onRegisterSuccess() {
  yield takeLatest(
    UserActionTypes.REGISTER_USER_SUCCESS,
    loginAfterRegisteringUser
  );
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onRegisterStart),
    call(onRegisterSuccess)
  ]);
}
