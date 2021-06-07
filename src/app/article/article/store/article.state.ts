import { Articles } from '../model/articles.model';

export interface ArticleState {
  loading: boolean;
  error?: string;
  articles?: Articles;
}
