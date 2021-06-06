import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { signUpAction, signUpSuccessAction, signUpFailureAction } from './user.action';

import { StorageService } from '../common/service/storage.service';
import { UserService } from './user.service';

import { User } from './user.interface';

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

  constructor(
    private router: Router,
    private actions$: Actions,
    private userService: UserService,
    private storageService: StorageService) {
  }
}