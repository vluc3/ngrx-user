import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GlobalArticleComponent } from './global-article.component';
import { ArticleModule } from '../article/article.module';

const routes: Routes = [
  {path: '', component: GlobalArticleComponent}
];

@NgModule({
  declarations: [
    GlobalArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleModule,
  ]
})
export class GlobalArticleModule {
}
