import { useState } from 'react';

import { AuthLayout } from '../layouts/AuthLayout';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    const [username, setUsername] = useState('test');
    const [email, setEmail] = useState('test@email.com');
    const [password, setPassword] = useState('123456');
    const [password2, setPassword2] = useState('123456');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log({
            username,
            email,
            password,
            password2,
        });
    }

    return (
        <AuthLayout>
            <div
                className="mark w-8 h-20 bg-primary absolute right-4 top-0"
                style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 50% 80%, 0 100%, 0 0)',
                }}
            ></div>

            <h1 className="text-2xl uppercase mb-4">Register</h1>
            <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" className="text-sm text-primary">
                        Username
                    </label>
                    <input
                        className="w-full py-1 px-2 outline-none border-b-[1px] border-b-gray-200 focus:border-b-primary"
                        type="text"
                        name=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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
                <div>
                    <label htmlFor="" className="text-sm text-primary">
                        Repeat Password
                    </label>
                    <input
                        className="w-full py-1 px-2 outline-none border-b-[1px] border-b-gray-200 focus:border-b-primary"
                        type="password"
                        name=""
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-primary text-white py-1 uppercase">
                    Register
                </button>
                <p className="text-sm">
                    Are you registered?{' '}
                    <Link className="text-primary" to={'/auth/login'} replace>
                        Login
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};
