import { User } from '../../../user/model/user.model';

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  description: string;
  author: User;
  favorited: boolean;
  favoritesCount: number;
}
