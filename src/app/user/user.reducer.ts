import { createReducer, on, Action } from '@ngrx/store';

import { signUpAction, signUpFailureAction, signUpSuccessAction } from './user.action';
import { signInAction, signInFailureAction, signInSuccessAction } from './user.action';

import { UserState } from './user.state';

const initialState: UserState = {
  submitting: false
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
      user: action.user,
      submitting: false,
      signedIn: true,
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
      user: action.user,
      submitting: false,
      signedIn: true,
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
);

export function userReducer(state: UserState, action: Action) {
  return _userReducer(state, action);
}
