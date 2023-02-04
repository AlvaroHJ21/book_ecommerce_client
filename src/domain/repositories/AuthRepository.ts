import {
    RequestLoginUserDto,
    RequestRegisterUserDto,
    ResponseLoginUserDto,
    ResponseRegisterUserDto,
} from '../models/User';

export default abstract class AuthRepository {
    abstract login(loginUserDto: RequestLoginUserDto): Promise<ResponseLoginUserDto>;

    abstract register(registerUserDto: RequestRegisterUserDto): Promise<ResponseRegisterUserDto>;
}
