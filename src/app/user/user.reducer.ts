import { createReducer, on, Action } from '@ngrx/store';

import { signUpAction, signUpFailureAction, signUpSuccessAction } from './user.action';
import { signInAction, signInFailureAction, signInSuccessAction } from './user.action';
import { getUserAction, getUserFailureAction, getUserSuccessAction } from './user.action';

import { UserState } from './user.state';

const initialState: UserState = {
  submitting: false,
  loading: false,
  signedIn: null,
  user: null,
  errors: null
};

const _userReducer = createReducer(
  initialState,
  on(
    signUpAction, (state): UserState => ({
      ...state,
      submitting: true,
      errors: null
    })
  ),
  on(
    signUpSuccessAction, (state, action): UserState => ({
      ...state,
      submitting: false,
      signedIn: true,
      user: action.user,
    })
  ),
  on(
    signUpFailureAction, (state, action): UserState => ({
      ...state,
      submitting: false,
      signedIn: false,
      errors: action.errors
    })
  ),
  on(
    signInAction, (state): UserState => ({
      ...state,
      submitting: true,
      errors: null
    })
  ),
  on(
    signInSuccessAction, (state, action): UserState => ({
      ...state,
      submitting: false,
      signedIn: true,
      user: action.user,
    })
  ),
  on(
    signInFailureAction, (state, action): UserState => ({
      ...state,
      submitting: false,
      signedIn: false,
      errors: action.errors
    })
  ),
  on(
    getUserAction, (state): UserState => ({
      ...state,
      loading: true,
      errors: null
    })
  ),
  on(
    getUserSuccessAction, (state, action): UserState => ({
      ...state,
      loading: false,
      signedIn: true,
      user: action.user,
    })
  ),
  on(
    getUserFailureAction, (state, action): UserState => ({
      ...state,
      loading: false,
      signedIn: false,
      user: null,
      errors: action.errors
    })
  ),
);

export function userReducer(state: UserState, action: Action) {
  return _userReducer(state, action);
}
