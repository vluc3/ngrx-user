import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserEffect } from './store/user.effect';
import { userReducer } from './store/user.reducer';

import { StorageService } from '../common/service/storage.service';
import { UserService } from './user.service';

import { SignComponent } from './sign/sign/component/sign.component';
import { SignUpComponent } from './sign/sign-up/component/sign-up.component';
import { SignInComponent } from './sign/sign-in/component/sign-in.component';

import { ErrorMessagesModule } from '../error-messages/error-messages.module';

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
