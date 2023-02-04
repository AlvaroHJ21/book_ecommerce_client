import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { useAuth } from '../../../hooks/useAuth';
import { HttpAuthRepository } from '../../../../data/http/HttpAuthRepository';

export const LoginPage = () => {
    const [email, setEmail] = useState('test@email.com');
    const [password, setPassword] = useState('123456');

    const { handleLogin } = useAuth(new HttpAuthRepository());

    const navigate = useNavigate();

    async function handleSubmitForm(e: React.FormEvent) {
        e.preventDefault();

        console.log({
            email,
            password,
        });

        await handleLogin(email, password);

        navigate('/my-books');
    }

    return (
        <AuthLayout>
            <div
                className="mark w-8 h-20 bg-primary absolute right-4 top-0"
                style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 50% 80%, 0 100%, 0 0)',
                }}
            ></div>

            <h1 className="text-2xl uppercase mb-4">Login</h1>
            <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor="" className="text-sm text-primary">
                        Email
                    </label>
                    <input
                        className="w-full py-1 px-2 outline-none border-b-[1px] border-b-gray-200 focus:border-b-primary"
                        type="email"
                        name=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="" className="text-sm text-primary">
                        Password
                    </label>
                    <input
                        className="w-full py-1 px-2 outline-none border-b-[1px] border-b-gray-200 focus:border-b-primary"
                        type="password"
                        name=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-primary text-white py-1 uppercase">
                    Login
                </button>
                <p className="text-sm">
                    Not registered yet?{' '}
                    <Link className="text-primary" to={'/auth/register'} replace>
                        Create on Account
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};
