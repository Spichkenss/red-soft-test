import AuthService from "./auth.service";
import {LoginDto, LoginResponse} from "./types/login.dto";
import {SleepDecorator} from "@fake-server/lib/decorators/sleep";


class AuthController {
  constructor(private readonly authService: typeof AuthService) {
  }

  @SleepDecorator(2000)
  async login(loginDto: Required<LoginDto>): Promise<LoginResponse> {
    return this.authService.login(loginDto);
  }
}

export default new AuthController(AuthService);
