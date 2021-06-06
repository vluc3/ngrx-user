import { UserState } from './user/user.state';
import { ArticleState } from './article/article/article.state';

export interface AppState {
  user: UserState;
  article: ArticleState;
}
