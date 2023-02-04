import ShopView from '../pages/book/shop/ShopView';
import HomeView from '../pages/home/main/HomeView';

interface NavLink {
    to: string;
    name: string;
    component: JSX.Element;
}

export const navLinks: NavLink[] = [
    {
        to: '/',
        name: 'Home',
        component: <HomeView />,
    },
    {
        to: '/books',
        name: 'Books',
        component: <ShopView />,
    },
    {
        to: '/blog',
        name: 'Blog',
        component: <ShopView />,
    },
];
