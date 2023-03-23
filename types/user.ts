export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export type UserWithoutPassword = Omit<User, "password">;

export type UserState = UserWithoutPassword | null;
