export interface User {
  id: number;
  username: string;
  email: string;
  bio?: string;
  image?: string;
  following?: boolean;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
