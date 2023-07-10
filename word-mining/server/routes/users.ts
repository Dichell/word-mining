import { Router } from "express";

class Users {
    router: Router
    constructor(){
        this.router = Router()
        this.createRoutes()
    }
    private createRoutes(){
        this.router.get('api/sessions/oauth/google', this.googleOauthHandler)
    }
    googleOauthHandler = async () => {

    }
}

export default new Users().router
