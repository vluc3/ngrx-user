import { Articles } from './articles.model';

export interface ArticleState {
  loading: boolean;
  error?: string;
  articles?: Articles;
}
