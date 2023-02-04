import Role from './Role';

export interface User{
    _id: string;
    username: string;
    email: string;
    roles: Role[];
}

export interface RequestRegisterUserDto{
    username: string;
    email: string;
    password: string;
}

export interface ResponseRegisterUserDto{
    _id: string;
    username: string;
    email: string;
    token: string;
}

export interface RequestLoginUserDto{
    email: string;
    password: string;
}

export interface ResponseLoginUserDto{
    _id: string;
    username: string;
    email: string;
    token: string;
}