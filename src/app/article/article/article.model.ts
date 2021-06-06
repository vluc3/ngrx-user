import { User } from '../../user/user.model';

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  description: string;
  author: User;
  favorited: boolean;
  favoritesCount: number;
}
