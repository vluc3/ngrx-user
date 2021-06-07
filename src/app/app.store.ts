import { UserState } from './user/store/user.state';
import { ArticleState } from './article/article/store/article.state';

export interface AppState {
  user: UserState;
  article: ArticleState;
}
