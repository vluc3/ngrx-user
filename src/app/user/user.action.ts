import { createAction, props } from '@ngrx/store';

import { UserActionEnum } from './user-action.enum';

import { User } from './user.interface';
import { Errors } from '../common/interface/errors.interface';

import { SignUp } from './sign/sign-up/sign-up.interface';
import { SignIn } from './sign/sign-in/sign-in.interface';

export const signUpAction = createAction(
  UserActionEnum.signUp,
  props<{signUp: SignUp}>()
);

export const signUpSuccessAction = createAction(
  UserActionEnum.signUpSuccess,
  props<{user: User}>()
);

export const signUpFailureAction = createAction(
  UserActionEnum.signUpFailure,
  props<{errors: Errors}>()
);

export const signInAction = createAction(
  UserActionEnum.signIn,
  props<{signIn: SignIn}>()
);

export const signInSuccessAction = createAction(
  UserActionEnum.signInSuccess,
  props<{user: User}>()
);

export const signInFailureAction = createAction(
  UserActionEnum.signInFailure,
  props<{errors: Errors}>()
);
