import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Article } from './article.model';
import { Articles } from './articles.model';

@Injectable()
export class ArticleService {

  constructor(
    private httpClient: HttpClient) {
  }

  getArticles(uri: string): Observable<Articles> {
    const url = `${environment.apiUrl}${uri}`;
    return this.httpClient.get<Articles>(url);
  }
}
