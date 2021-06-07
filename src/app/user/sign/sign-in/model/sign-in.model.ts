import { AbstractSign } from '../../abstract-sign/model/abstract-sign.model';

export interface SignIn  extends AbstractSign {
  user: {
    email: string;
    password: string;
  };
}
