import express from "express";

class App {
  private app: express.Application;
  constructor() {
    this.app = express();
  }
  private configurationMiddlewares(): void {
    this.app.use(express.json());
  }

  start(port: number): void {
    this.configurationMiddlewares();
    this.app.listen(port, () => {
      console.log(`Server listen at ${port}`);
    });
  }
}
export default new App();
