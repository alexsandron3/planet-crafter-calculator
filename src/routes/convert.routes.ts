import { Router } from "express";
import { Convert } from "../controllers/convert.controller";
class ConvertRoutes {
  router = Router();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", Convert);
  }
}

export default new ConvertRoutes().router;
