import { IsString, IsStrongPassword, Matches, MaxLength, MinLength } from "class-validator";
import DTO from "./DTO";

export default class Manager extends DTO {
    username: string;
    password: string;

    constructor(
        username: string,
        password: string
    ){
        super()
        this.username = username
        this.password = password
    }
}