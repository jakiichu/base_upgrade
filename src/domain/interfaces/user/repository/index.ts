import {ILoginPort} from "@domain/interfaces/user/port";
import {ILoginDto} from "@domain/interfaces/user/dto";

interface IUserRepository {
    UserLoginRequest(port: ILoginPort): Promise<ILoginDto>
}

export type {IUserRepository}