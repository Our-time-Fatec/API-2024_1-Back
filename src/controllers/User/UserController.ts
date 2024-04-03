import { Request, Response } from "express";
import { IUserController, IUserRepository } from "./protocols";


export default class UserController implements IUserController{
        constructor( private readonly UserRepository: IUserRepository){
        }
    async handle() {
        try{
        const users = await this.UserRepository.getUsers()

        return {
            statusCode: 200,
            body: users,
        }
    }catch (error) {
        return {
            statusCode: 500,
            body: 'Algo deu errado'
        }
    }}
}