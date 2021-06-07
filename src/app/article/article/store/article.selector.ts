import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../../app.store';
import { ArticleState } from './article.state';

export const articleFeatureSelector = createFeatureSelector<AppState, ArticleState>('article');

export const loadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleState) => {
    return articleState.loading;
  }
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleState) => {
    return articleState.error;
  }
);

export const articlesSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleState) => {
    return articleState.articles;
  }
);
