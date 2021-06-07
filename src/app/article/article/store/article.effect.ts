import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { ArticleService } from '../article.service';
import { Articles } from '../model/articles.model';

import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './article.action';

@Injectable()
export class ArticleEffect {

  getArticle$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(getArticleAction),
        switchMap(({uri}) => {
          return this.articleService.getArticles(uri)
            .pipe(
              map((articles: Articles) => {
                return getArticleSuccessAction({articles});
              }),
              catchError((errorResponse: HttpErrorResponse) => {
                console.log('errorResponse:', errorResponse);
                return of(getArticleFailureAction({errors: errorResponse.error?.errors}));
              }
            )
          );
        }
      )
    );
  });

  constructor(
    private actions$: Actions,
    private articleService: ArticleService) {
  }
}
