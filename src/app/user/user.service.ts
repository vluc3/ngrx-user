import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from './user.interface';
import { UserResponse } from './user.response';

import { SignUp } from './sign/sign-up/sign-up.interface';
import { SignIn } from './sign/sign-in/sign-in.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient) {
  }

  signUp(signUp: SignUp): Observable<User> {
    const url = `${environment.apiUrl}/users`;

    return this.httpClient.post<UserResponse>(url, signUp)
      .pipe(
        map(this.getUserFromResponse)
      );
  }

  signIn(signIn: SignIn): Observable<User> {
    const url = `${environment.apiUrl}/users/login`;

    return this.httpClient.post<UserResponse>(url, signIn)
      .pipe(
        map(this.getUserFromResponse)
      );
  }

  getUser(): Observable<User> {
    const url = `${environment.apiUrl}/user`;

    return this.httpClient.get<UserResponse>(url)
      .pipe(
        map(this.getUserFromResponse)
      );
  }

  private getUserFromResponse(response: UserResponse): User {
    return response.user;
  }
}
