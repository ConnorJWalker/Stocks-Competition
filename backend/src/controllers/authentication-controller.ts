import { Request, Response } from "express"
import Controller from './controller'
import ISignupRequest from "../models/requests/signup-request"
import DatabaseService from "../services/database-service"

export default class AuthenticationController extends Controller {
    databaseService: DatabaseService
    
    constructor() {
        super()
        this.databaseService = new DatabaseService()

        this.Signup = this.Signup.bind(this)
    }
    
    public Signup(req: Request<ISignupRequest>, res: Response) {
        if (!this.ValidateSignup(req.body)) {
            return this.BadRequest(res)
        }

        // TODO: create user
        this.databaseService.CreateUser(req.body)
        return this.Ok(res, { test: true })
    }

    private ValidateSignup(form: ISignupRequest): boolean {
        if (!form) return false

        if (!form.displayName || !form.discordUsername || !form.displayColour || !form.password || !form.freetradeCookie) {
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
