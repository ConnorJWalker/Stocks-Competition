import { Request, Response } from "express"
import Controller from './controller'
import SignupRequest from "../models/requests/signup-request"

export default class AuthenticationController extends Controller {
    constructor() {
        super()

        this.Signup = this.Signup.bind(this)
    }
    
    public Signup(req: Request<SignupRequest>, res: Response) {
        if (!this.ValidateSignup(req.body)) {
            return this.BadRequest(res)
        }

        // TODO: create user

        return this.Ok(res, { test: true })
    }

    private ValidateSignup(form: SignupRequest): boolean {
        if (!form) return false

        if (!form.displayName || !form.discordUsername || !form.password || !form.freetradeCookie) {
            return false
        }

        if (form.password !== form.passwordConfirm) {
            return false
        }

        // TODO: check freetrade cookie is valid
        // TODO: check is in discord
        return true
    }
}
