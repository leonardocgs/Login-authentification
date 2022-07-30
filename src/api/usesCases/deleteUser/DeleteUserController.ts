import { Request, Response } from "express";

import { DeleteUserService } from "./DeleteUserService";

class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}
  handle(request: Request, response: Response) {
    const { userId } = request;
    try {
      this.deleteUserService.execute(userId);
      response.status(200).json({ message: "User deleted" });
    } catch (err) {
      response.status(500).json({ message: "Connection Error" });
    }
  }
}
export { DeleteUserController };
