import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SignTypeEnum } from '../../sign/enum/sign-type.enum';

import { Errors } from '../../../../common/model/errors.model';

import { errorsSelector, submittingSelector } from '../../../store/user.selector';

@Component({
  template: ''
})
export abstract class AbstractSignComponent implements OnInit {

  form: FormGroup;

  submitting$: Observable<boolean>;
  errors$?: Observable<Errors>;

  constructor(
    protected formBuilder: FormBuilder,
    protected store: Store) {
  }

  get userSignTypeEnum(): typeof SignTypeEnum {
    return SignTypeEnum;
  }

  ngOnInit() {
    this.setSelector();
    this.createForm();
  }

  abstract onSubmit(): void;

  protected setSelector() {
    this.submitting$ = this.store
      .pipe(
        select(submittingSelector)
      );

    this.errors$ = this.store
      .pipe(
        select(errorsSelector)
      );
  }

  protected abstract createForm(): void;
}
