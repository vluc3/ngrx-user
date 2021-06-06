import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { ArticleEffect } from './article.effect';
import { articleReducer } from './article.reducer';

import { ArticleService } from './article.service';

import { ArticleComponent } from './article.component';

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
