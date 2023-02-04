import axios from 'axios';
import AuthRepository from '../../domain/repositories/AuthRepository';
import ResponseApi from '../../domain/models/ResponseApi';
import {
    RequestLoginUserDto,
    RequestRegisterUserDto,
    ResponseLoginUserDto,
    ResponseRegisterUserDto,
} from '../../domain/models/User';

export class HttpAuthRepository implements AuthRepository {
    private authApi = axios.create({
        baseURL: 'http://localhost:3002/api/v1/auth',
    });

    async login(loginUserDto: RequestLoginUserDto): Promise<ResponseLoginUserDto> {
        try {
            const resp = await this.authApi.post<ResponseApi<ResponseLoginUserDto>>(
                '/login',
                loginUserDto
            );
            return resp.data.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error al iniciar sesión');
        }
    }
    async register(registerUserDto: RequestRegisterUserDto): Promise<ResponseRegisterUserDto> {
        throw new Error('Method not implemented.');
    }
}
