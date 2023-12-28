import {User} from "@fake-server/lib/db/users";

export interface LoginDto {
  login: string;
  password: string;
}

export interface LoginResponse {
  user: User,
  token: string
}
