import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { ArticleEffect } from './store/article.effect';
import { articleReducer } from './store/article.reducer';

import { ArticleService } from './article.service';

import { ArticleComponent } from './component/article.component';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([
      ArticleEffect
    ]),
  ],
  exports: [
    ArticleComponent
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule {
}
