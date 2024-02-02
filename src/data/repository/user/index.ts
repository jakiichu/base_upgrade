import {ILoginDto} from "@domain/interfaces/user/dto";
import {ILoginPort} from "@domain/interfaces/user/port";
import {IUserRepository} from "@domain/interfaces/user/repository";
import API_HTTPS_SERVICES from "@data/common/settings/api";

class UserRepository implements IUserRepository {
    public async UserLoginRequest(port: ILoginPort): Promise<ILoginDto> {
        const res = await API_HTTPS_SERVICES.post('/auth/sign-in', port);
        return await res.data;
    }
}

export default UserRepository