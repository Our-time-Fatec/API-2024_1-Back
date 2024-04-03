import { IsString, IsStrongPassword, Matches, MaxLength, MinLength } from "class-validator";
import DTO from "./DTO";

export default class User extends DTO {
    firstname: string;
    lastname: string;
    username: string;
    password: string;

    constructor(
        firstname: string,
        lastname: string,
        username: string,
        password: string
    ){
        super()
        this.username = username
        this.password = password
        this.firstname = firstname
        this.lastname = lastname
    }
}