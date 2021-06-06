import { AbstractSign } from '../abstract-sign/abstract-sign.model';

export interface SignUp extends AbstractSign {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
