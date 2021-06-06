import { createReducer, on, Action } from '@ngrx/store';

import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './article.action';

import { ArticleState } from './article.state';

const initialState: ArticleState = {
  loading: false,
  error: null,
  articles: null
};

const _articleReducer = createReducer(
  initialState,
  on(
    getArticleAction, (state): ArticleState => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(
    getArticleSuccessAction, (state, action): ArticleState => ({
      ...state,
      loading: false,
      articles: action.articles
    })
  ),
  on(
    getArticleFailureAction, (state, action): ArticleState => ({
      ...state,
      loading: false
    })
  ),
);

export function articleReducer(state: ArticleState, action: Action) {
  return _articleReducer(state, action);
}
