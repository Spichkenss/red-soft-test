import {User, users} from "@fake-server/lib/db/users";
import {LoginDto, LoginResponse} from "@fake-server/src/auth/types/login.dto";
import {createId} from "@paralleldrive/cuid2";


class AuthService {
  private readonly userRepository: User[];

  constructor() {
    this.userRepository = users;
  }

  async login(credentials: LoginDto): Promise<LoginResponse> {
    const {login, password} = credentials;

    const foundUser = this.userRepository.find(user => user.login === login);

    if (!foundUser) {
      throw new Error("User doesn't exist!");
    }

    if (foundUser.password !== password) {
      throw new Error("Wrong password!");
    }

    return { user: foundUser, token: createId() };
  }
}

export default new AuthService();
