import { UserWithoutPassword } from "./user";
export interface TokenResposne {
  token: string;
}

export interface AuthResponese {
  token: string;
  user: UserWithoutPassword;
}

export interface AuthSignupDto {
  name: string;
  password: string;
  email: string;
}
