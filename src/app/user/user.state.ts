import { Errors } from '../common/interface/errors.interface';
import { User } from './user.interface';

export interface UserState {
  submitting: boolean;
  user?: User;
  signedIn?: boolean;
  errors?: Errors;
}
