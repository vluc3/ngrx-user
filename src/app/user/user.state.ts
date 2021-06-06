import { Errors } from '../common/type/errors.interface';
import { User } from './user.interface';

export interface UserState {
  submitting: boolean;
  user?: User;
  signedIn?: boolean;
  errors?: Errors;
}
