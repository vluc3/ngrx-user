import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AbstractSignComponent } from '../abstract-sign/abstract-sign.component';

import { signInAction } from '../../user.action';
import { SignIn } from './sign-in.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractSignComponent implements OnInit {

  constructor(
    protected formBuilder: FormBuilder,
    protected store: Store) {
      super(formBuilder, store);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit() {
    const signIn: SignIn = {
      user: this.form.value
    };

    this.store.dispatch(signInAction({signIn}));
  }

  protected createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
