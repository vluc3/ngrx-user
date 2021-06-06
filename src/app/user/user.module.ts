import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserEffect } from './user.effect';
import { userReducer } from './user.reducer';

import { StorageService } from '../common/service/storage.service';
import { UserService } from './user.service';

import { SignComponent } from './sign/sign/sign.component';
import { SignUpComponent } from './sign/sign-up/sign-up.component';
import { SignInComponent } from './sign/sign-in/sign-in.component';

import { ErrorMessagesModule } from '../common/component/error-messages/error-messages.module';

const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  declarations: [
    SignComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([
      UserEffect
    ]),
    ErrorMessagesModule,
  ],
  providers: [
    StorageService,
    UserService,
  ]
})
export class UserModule {
}
