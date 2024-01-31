import { Router } from "express";
import Translations from "./translations";

class Routes {
    router: Router
    constructor(){
        this.router = Router()
        this.createRoutes()
    }
    private createRoutes() {
        this.router.use("/translate", Translations)
    }
}

export default new Routes().router