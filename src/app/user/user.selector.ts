import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../app.store';
import { UserState } from './user.state';

export const userFeatureSelector = createFeatureSelector<AppState, UserState>('user');

export const submittingSelector = createSelector(
  userFeatureSelector,
  (userState: UserState) => {
    return userState.submitting;
  }
);


export const errorsSelector = createSelector(
  userFeatureSelector,
  (userState: UserState) => {
    return userState.errors;
  }
);
