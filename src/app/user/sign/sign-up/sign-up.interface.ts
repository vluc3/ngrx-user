import { Sign } from '../abstract-sign/abstract-sign.interface';

export interface SignUp extends Sign {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
