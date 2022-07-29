import { Request, Response } from "express";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  private createUserService: CreateUserService;
  constructor(createUserService: CreateUserService) {
    this.createUserService = createUserService;
  }
  async handle(request: Request, response: Response) {
    const { email, username, password } = request.body;
    try {
      await this.createUserService.execute({ email, username, password });
      response.status(201).json({ message: "User created!" });
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  }
}
export { CreateUserController };
