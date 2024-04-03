import { User } from "../../models/user"
import { HttpResponse } from "../protocols"

export interface IUserController {
    handle(): Promise<HttpResponse<User[]>>
}

export interface IUserRepository {
    getUsers(): Promise<User[]>
}