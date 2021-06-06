import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-article',
  templateUrl: './global-article.component.html',
  styleUrls: ['./global-article.component.scss']
})
export class GlobalArticleComponent implements OnInit {

  uri: string = '/articles';

  constructor() {
  }

  ngOnInit() {
  }
}
