import { Router } from "express";
import routes from "./routes";

class Api {
    router: Router
    constructor(){
        this.router = Router()
        this.createRoutes()
    }

    private createRoutes() {
        this.router.use("/api", routes)
    }
}

export default new Api().router
