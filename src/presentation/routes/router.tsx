import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import HomeView from '../pages/home/main/HomeView';
import ShopView from '../pages/book/shop/ShopView';
import { BookDetailsPage } from '../pages/book/detail/BookDetailsPage';
import { NotFoundView } from '../pages/not-found/NotFoundView';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        children: [
            {
                path: '/',
                element: <HomeView />,
            },
            {
                path: '/shop',
                element: <ShopView />,
            },
            {
                path: '/book/:id',
                element: <BookDetailsPage />,
            },
            {
                path: '/not-found',
                element: <NotFoundView />,
            },
        ],
    },

    {
        path: '*',
        element: <Navigate to={'/not-found'} />,
    },
]);
