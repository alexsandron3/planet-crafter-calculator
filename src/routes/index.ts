import { Application } from "express";
import convertRoutes from "./convert.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", convertRoutes);
  }
}
