import { createAction, props } from '@ngrx/store';
import { Errors } from '../../../common/model/errors.model';

import { ArticleActionEnum } from './article-action.enum';
import { Articles } from '../model/articles.model';

export const getArticleAction = createAction(
  ArticleActionEnum.GetArticle,
  props<{uri: string}>()
);

export const getArticleSuccessAction = createAction(
  ArticleActionEnum.GetArticleSuccess,
  props<{articles: Articles}>()
);

export const getArticleFailureAction = createAction(
  ArticleActionEnum.GetArticleFailure,
  props<{errors: Errors}>()
);
