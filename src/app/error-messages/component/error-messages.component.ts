import { Component, Input, OnInit } from '@angular/core';

import { Errors } from '../../common/model/errors.model';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {

  @Input()
  errors: Errors;

  errorMessages: string[];

  constructor() {
  }

  ngOnInit() {
    this.errorMessages = Object.keys(this.errors)
      .map((key: string) => {
        const message: string = this.errors[key].join(' ');
        return `${key} ${message}`;
      });
  }
}
