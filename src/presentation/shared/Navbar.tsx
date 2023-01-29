import { Link } from 'react-router-dom';

import { imgLogo } from '../../assets';
import { container } from '../utils';
import { useStore } from '../../store/store';

export const Navbar = () => {

    const { bag, toggleModal } = useStore((state) => state);

    return (
        <nav className="bg-secondary min-h-[64px] z-20">
            <div className={`${container} h-full flex justify-between items-center`}>
                <Link to={'/'}>
                    <img src={imgLogo} alt="" />
                </Link>
                <ul className="flex gap-4">
                    <li className="border-b-2 border-b-secondary hover:border-primary">
                        <Link className="py-2 px-4" to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className="border-b-2 border-b-secondary hover:border-primary">
                        <Link className="py-2 px-4" to={'/shop'}>
                            Books
                        </Link>
                    </li>
                    <li className="border-b-2 border-b-secondary hover:border-primary">
                        <Link className="py-2 px-4" to={'/blog'}>
                            Blog
                        </Link>
                    </li>
                </ul>
                <div className="flex gap-8">
                    <div className="relative cursor-pointer" onClick={toggleModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        <div className="absolute top-[-8px] right-[-10px] bg-primary text-white text-[10px] font-semibold  w-4 h-4 flex justify-center items-center rounded-full">
                            {bag.length}
                        </div>
                    </div>

                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    );
};
