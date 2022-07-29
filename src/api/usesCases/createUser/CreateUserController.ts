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
      response.status(201).send("Deu bom");
    } catch (err) {
      response.status(500).send("Deu ruim");
    }
  }
}
export { CreateUserController };
