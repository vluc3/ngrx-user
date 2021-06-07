import { Errors } from '../../common/model/errors.model';
import { User } from '../model/user.model';

export interface UserState {
  submitting: boolean;
  loading?: boolean;
  signedIn?: boolean;
  user?: User;
  errors?: Errors;
}
