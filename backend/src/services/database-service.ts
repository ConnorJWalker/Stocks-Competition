import { PrismaClient } from "@prisma/client"
import ISignupRequest from "../models/requests/signup-request"

export default class DatabaseService {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }
    
    async CreateUser(form: ISignupRequest) {
        await this.prisma.user.create({
            data: {
                displayName: form.displayName,
                discordUsername: form.discordUsername,
                displayColour: form.displayColour,
                password: form.password,
                freetradeCookie: form.freetradeCookie
            }
        })
    }
}
