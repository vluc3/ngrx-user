import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Articles } from '../article/articles.model';

import { getArticleAction } from './article.action';
import { articlesSelector, errorSelector, loadingSelector } from './article.selector';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input()
  uri: string;

  loading$: Observable<boolean>;
  error$?: Observable<string>;
  articles$?: Observable<Articles>;

  constructor(
    private store: Store) {
  }

  ngOnInit() {
    this.setSelector();
    this.find();
  }

  private setSelector() {
    this.loading$ = this.store
      .pipe(
        select(loadingSelector)
      );

    this.error$ = this.store
      .pipe(
        select(errorSelector)
      );

    this.articles$ = this.store
      .pipe(
        select(articlesSelector)
      );
  }

  private find() {
    this.store.dispatch(getArticleAction({uri: this.uri}));
  }
}
