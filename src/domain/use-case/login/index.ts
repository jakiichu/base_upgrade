import {IUserRepository} from "@domain/interfaces/user/repository";
import {ILoginPort} from "@domain/interfaces/user/port";
import {ILoginDto} from "@domain/interfaces/user/dto";

class UserLoginUseCase {
    private repository: IUserRepository

    constructor(repository: IUserRepository) {
        this.repository = repository
    }

    public async execute(port: ILoginPort): Promise<ILoginDto> {
        return this.repository.UserLoginRequest(port)
    }
}

export default UserLoginUseCase