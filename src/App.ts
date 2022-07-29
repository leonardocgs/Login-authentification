import express from "express";

import { userRouter } from "./api/routes/user.routes";

class App {
  private app: express.Application;
  constructor() {
    this.app = express();
  }

  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use("/user/create", userRouter);
  }

  start(port: number): void {
    this.setMiddlewares();
    this.app.listen(port, () => {
      console.log(`Server listen at ${port}`);
    });
  }
}
export default new App();
