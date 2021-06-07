import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessagesComponent } from './component/error-messages.component';

@NgModule({
  declarations: [
    ErrorMessagesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessagesComponent
  ]
})
export class ErrorMessagesModule {
}
