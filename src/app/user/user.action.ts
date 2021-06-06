import { createAction, props } from '@ngrx/store';

import { SignUp } from './sign-up/sign-up.interface';
import { UserActionEnum } from './user-action.enum';
import { Errors } from '../common/type/errors.interface';
import { User } from './user.interface';

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
