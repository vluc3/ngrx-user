import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserSignTypeEnum } from '../../user-sign-type.enum';

import { Errors } from '../../../common/model/errors.model';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  @Input()
  userSignType: UserSignTypeEnum;

  @Input()
  redirectMessage: string;

  @Input()
  redirectUri: string;

  @Input()
  form: FormGroup;

  @Input()
  errors$: Observable<Errors>;

  @Input()
  submitting$: Observable<boolean>;

  @Output()
  onSubmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  get userSignTypeEnum(): typeof UserSignTypeEnum {
    return UserSignTypeEnum;
  }

  ngOnInit() {
  }

  submit() {
    this.onSubmit.emit();
  }
}
