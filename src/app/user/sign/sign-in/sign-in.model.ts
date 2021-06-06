import { AbstractSign } from '../abstract-sign/abstract-sign.model';

export interface SignIn  extends AbstractSign {
  user: {
    email: string;
    password: string;
  };
}
