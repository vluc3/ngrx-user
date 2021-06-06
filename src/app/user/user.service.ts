import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from './user.interface';
import { SignUp } from './sign-up/sign-up.interface';
import { UserResponse } from './user.response';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient) {
  }

  signUp(signUp: SignUp): Observable<User> {
    const url = `${environment.apiUrl}/users`;

    return this.httpClient.post<UserResponse>(url, signUp)
      .pipe(
        map((response: UserResponse) => response.user)
      );
  }
}
