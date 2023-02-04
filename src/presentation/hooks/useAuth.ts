import React from 'react';
import AuthRepository from '../../domain/repositories/AuthRepository';
import { useStore } from '../../store/store';

export const useAuth = (repository: AuthRepository) => {

    const { login, logout } = useStore((state) => state);

    async function handleLogin(email: string, password: string) {
        
        if (email === '' || password === '') {
            console.log('Email y/o contraseña vacíos');
            return;
        }

        const resp = await repository.login({ email, password });
        
        login();
    }

    async function handleRegister() {}

    return { handleLogin, handleRegister };
};
