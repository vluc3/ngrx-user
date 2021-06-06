import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { signUpAction, signUpSuccessAction, signUpFailureAction } from './user.action';
import { signInAction, signInSuccessAction, signInFailureAction } from './user.action';
import { getUserAction, getUserSuccessAction, getUserFailureAction } from './user.action';

import { StorageService } from '../common/service/storage.service';
import { UserService } from './user.service';

import { User } from './user.model';

@Injectable()
export class UserEffect {

  signUp$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(signUpAction),
        switchMap(({signUp}) => {
          return this.userService.signUp(signUp)
            .pipe(
              map((user: User) => {
                this.storageService.set('token', user.token);
                return signUpSuccessAction({user});
              }),
              catchError((errorResponse: HttpErrorResponse) => {
                console.log('errorResponse:', errorResponse);
                return of(signUpFailureAction({errors: errorResponse.error.errors}));
              }
            )
          );
        }
      )
    );
  });

  signUpSuccessRedirect$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(signUpSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        }
      )
    );
  },
  {dispatch: false});

  signIn$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(signInAction),
        switchMap(({signIn}) => {
          return this.userService.signIn(signIn)
            .pipe(
              map((user: User) => {
                this.storageService.set('token', user.token);
                return signInSuccessAction({user});
              }),
              catchError((errorResponse: HttpErrorResponse) => {
                console.log('errorResponse:', errorResponse);
                return of(signInFailureAction({errors: errorResponse.error?.errors}));
              }
            )
          );
        }
      )
    );
  });

  signInSuccessRedirect$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(signInSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        }
      )
    );
  },
  {dispatch: false});

  getUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(getUserAction),
        switchMap(() => {
          const token: string = this.storageService.get('token');

          if (! token) {
            return of(getUserFailureAction(null));
          }

          return this.userService.getUser()
            .pipe(
              map((user: User) => {
                return getUserSuccessAction({user});
              }),
              catchError((errorResponse: HttpErrorResponse) => {
                console.log('errorResponse:', errorResponse);
                return of(getUserFailureAction({errors: errorResponse.error?.errors}));
              }
            )
          );
        }
      )
    );
  });

  constructor(
    private router: Router,
    private actions$: Actions,
    private userService: UserService,
    private storageService: StorageService) {
  }
}
