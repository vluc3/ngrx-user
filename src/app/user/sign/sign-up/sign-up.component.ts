import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AbstractSignComponent } from '../abstract-sign/abstract-sign.component';

import { signUpAction } from '../../user.action';
import { SignUp } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends AbstractSignComponent implements OnInit {

  constructor(
    protected formBuilder: FormBuilder,
    protected store: Store) {
      super(formBuilder, store);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit() {
    const signUp: SignUp = {
      user: this.form.value
    };

    this.store.dispatch(signUpAction({signUp}));
  }

  protected createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
