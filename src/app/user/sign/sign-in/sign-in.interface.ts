import { Sign } from '../abstract-sign/abstract-sign.interface';

export interface SignIn  extends Sign {
  user: {
    email: string;
    password: string;
  };
}
