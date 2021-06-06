import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getUserAction } from './user/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(getUserAction());
  }
}

