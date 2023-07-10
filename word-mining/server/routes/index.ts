import { Router } from "express";
import Translations from "./translations";
import Users from "./users";

class Routes {
    router: Router
    constructor(){
        this.router = Router()
        this.createRoutes()
    }
    private createRoutes() {
        this.router.use("/translate", Translations)
        this.router.use("/users", Users)
    }
}

export default new Routes().router