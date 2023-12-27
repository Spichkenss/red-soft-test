import AuthService from "./auth.service.ts";
import {SleepDecorator} from "../../lib/decorators/sleep.ts";
import {LoginDto} from "./types/login.dto.ts";
import {User} from "../../lib/db/users.ts";


class AuthController {
  constructor(private readonly authService: typeof AuthService) {
  }

  @SleepDecorator(2000)
  async login(loginDto: Required<LoginDto>): Promise<User> {
    return this.authService.login(loginDto);
  }
}

export default new AuthController(AuthService);
