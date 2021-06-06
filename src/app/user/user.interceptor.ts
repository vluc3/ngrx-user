import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StorageService } from '../common/service/storage.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(
    private storageService: StorageService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      const token: string = this.storageService.get('token');

      request = request.clone({
        setHeaders: {
          Authorization: (token) ? `Token ${token}` : ''
        }
      });

      return next.handle(request);
  }
}
