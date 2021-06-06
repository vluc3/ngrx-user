import { Errors } from '../common/interface/errors.interface';
import { User } from './user.interface';

export interface UserState {
  submitting: boolean;
  loading?: boolean;
  signedIn?: boolean;
  user?: User;
  errors?: Errors;
}
