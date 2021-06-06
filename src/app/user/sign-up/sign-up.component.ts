import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Errors } from '../../common/type/errors.interface';

import { signUpAction } from '../user.action';
import { User } from '../user.interface';
import { errorsSelector, submittingSelector } from '../user.selector';
import { UserService } from '../user.service';
import { SignUp } from './sign-up.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  submitting$: Observable<boolean>;
  errors$?: Observable<Errors>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private userService: UserService) {
  }

  ngOnInit() {
    this.setSelector();
    this.createForm();
  }

  onSubmit() {
    console.log('value:', this.form.value, 'valid:', this.form.valid);

    const signUp: SignUp = {
      user: this.form.value
    };

    this.store.dispatch(signUpAction({signUp}));
  }

  private submit() {
    this.userService.signUp(this.form.value).subscribe((user: User) => {
      console.log('user:', user);
    });
  }

  private setSelector() {
    this.submitting$ = this.store
      .pipe(
        select(submittingSelector)
      );

    this.errors$ = this.store
      .pipe(
        select(errorsSelector)
      );
  }

  private createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
