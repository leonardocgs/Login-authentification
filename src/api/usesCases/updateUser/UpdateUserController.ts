import { Request, Response } from "express";

import { UpdateUserService } from "./UpdateUserService";

class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}
  handle(request: Request, response: Response) {
    const { userId } = request;

    try {
      this.updateUserService.execute(userId, request.body);
      response.status(200).json({ message: "User Updated" });
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  }
}
export { UpdateUserController };
