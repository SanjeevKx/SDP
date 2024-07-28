import React from 'react';
import { ModeToggle } from '../mode-toggle';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const LinksData = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        }
    ];

    return (
        <nav className='w-full h-16 flex flex-row justify-between items-center border-b-2 border-primary px-4 fixed top-0 left-0 bg-background z-10'>
            <div className='flex items-center h-full'>
                <img 
                    src='https://ik.imagekit.io/rqds6dyata/Blue_Illustrative_Luxury_Real_Estate_Logo__1_-removebg-preview.png?updatedAt=1721985611931' 
                    alt='Logo' 
                    className='h-20 w-16 object-contain'
                />
                <span className='text-black text-2xl font-bold'>
                    estateEra
                </span>
            </div>
            <ul className='flex flex-row items-center font-bold text-xl gap-10'>
                {LinksData.map((data, index) => (
                    <li key={index} className='list-none'>
                        <NavLink to={data.link} className={({ isActive }) => isActive ? "text-primary" : ""}>
                            {data.title}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
