import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import HomeView from '../pages/home/main/HomeView';
import ShopView from '../pages/book/shop/ShopView';
import { BookDetailsPage } from '../pages/book/detail/BookDetailsPage';
import { NotFoundView } from '../pages/not-found/NotFoundView';
import { LoginPage } from '../pages/auth/login/LoginPage';
import { RegisterPage } from '../pages/auth/register/RegisterPage';
import { AuthLayout } from '../pages/auth/layouts/AuthLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        children: [ //TODO: que dependa del navlinks?? .map ...
            {
                path: '/',
                element: <HomeView />,
            },
            {
                path: '/books',
                element: <ShopView />,
            },
            {
                path: '/book/:id',
                element: <BookDetailsPage />,
            },
            {
                path: '/my-books',
                element: <ShopView />,
            },
            {
                path: '/not-found',
                element: <NotFoundView />,
            },

        ],
    },

    { path: '/auth/login', element: <LoginPage /> },
    { path: '/auth/register', element: <RegisterPage /> },
    { path: '/auth/*', element: <Navigate to={'/auth/login'} /> },
    {
        path: '*',
        element: <Navigate to={'/not-found'} />,
    },
]);
