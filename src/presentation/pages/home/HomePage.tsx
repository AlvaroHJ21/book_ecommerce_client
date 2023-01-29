import { Outlet } from 'react-router-dom';
import { Navbar } from '../../shared/Navbar';
import { BagView } from '../bag/BagView';

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className='relative overflow-x-hidden min-h-[calc(100vh-64px)]'>
                <Outlet />

                <BagView/>
            </div>
        </div>
    );
};

export default HomePage;
