import {User, users} from "../../lib/db/users.ts";
import {LoginDto} from "./types/login.dto.ts";

class AuthService {
  private readonly userRepository: User[];

  constructor() {
    this.userRepository = users;
  }

  async login(credentials: LoginDto): Promise<User> {
    const {login, password} = credentials;

    const foundUser = this.userRepository.find(user => user.login === login);

    if (!foundUser) {
      throw new Error("User doesn't exist!");
    }

    if (foundUser.password !== password) {
      throw new Error("Wrong password!");
    }

    return foundUser;
  }
}

export default new AuthService();
