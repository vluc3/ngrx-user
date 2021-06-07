import { createAction, props } from '@ngrx/store';

import { UserActionEnum } from './user-action.enum';

import { User } from '../model/user.model';
import { Errors } from '../../common/model/errors.model';

import { SignUp } from '../sign/sign-up/model/sign-up.model';
import { SignIn } from '../sign/sign-in/model/sign-in.model';

export const signUpAction = createAction(
  UserActionEnum.SignUp,
  props<{signUp: SignUp}>()
);

export const signUpSuccessAction = createAction(
  UserActionEnum.SignUpSuccess,
  props<{user: User}>()
);

export const signUpFailureAction = createAction(
  UserActionEnum.SignUpFailure,
  props<{errors: Errors}>()
);

export const signInAction = createAction(
  UserActionEnum.SignIn,
  props<{signIn: SignIn}>()
);

export const signInSuccessAction = createAction(
  UserActionEnum.SignInSuccess,
  props<{user: User}>()
);

export const signInFailureAction = createAction(
  UserActionEnum.SignInFailure,
  props<{errors: Errors}>()
);

export const getUserAction = createAction(
  UserActionEnum.GetUser
);

export const getUserSuccessAction = createAction(
  UserActionEnum.GetUserSuccess,
  props<{user: User}>()
);

export const getUserFailureAction = createAction(
  UserActionEnum.GetUserFailure,
  props<{errors: Errors}>()
);
