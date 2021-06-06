import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../user/user.model';
import { signedInSelector, signedOutSelector, userSelector } from '../user/user.selector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  signedIn$: Observable<boolean>;
  signedOut$: Observable<boolean>;

  user$: Observable<User>;

  constructor(
    private store: Store) {
  }

  ngOnInit() {
    this.setSelector();
  }

  private setSelector() {
    this.signedIn$ = this.store
      .pipe(
        select(signedInSelector)
      );

    this.signedOut$ = this.store
      .pipe(
        select(signedOutSelector)
      );

    this.user$ = this.store
      .pipe(
        select(userSelector)
      );
  }
}
