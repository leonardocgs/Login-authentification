import { Request, Response } from "express";

import { LoginUserService } from "./LoginUserService";

class LoginUserController {
  constructor(private loginUserService: LoginUserService) {}
  async handle(request: Request, response: Response) {
    console.log("Entrou aqui no controller");
    const { email, password } = request.body;
    try {
      const jwtToken = await this.loginUserService.execute({ email, password });
      response.status(200).json({ jwtToken });
    } catch (err) {
      response.status(401).json({ message: err.message });
    }
  }
}
export { LoginUserController };
