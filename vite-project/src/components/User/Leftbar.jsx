import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Building,
  UserCheck,
  Calendar,
  FileText,
  Settings,
  Power,
  Repeat,
  DollarSignIcon,
} from 'lucide-react';
import { Button } from '../ui/button';

const Leftbar = () => {
  const UserLinks = [
    {
      title: 'Dashboard',
      link: '/user/dashboard',
      icon: Home,
    },
    {
      title: 'Properties Available',
      link: '/user/properties',
      icon: Building,
    },
    {
      title: 'Sell Land',
      link: '/user/properties',
      icon: DollarSignIcon,
    },
    {
      title: 'Agents',
      link: '/user/agents',
      icon: UserCheck,
    },
    {
      title: 'Appointments',
      link: '/user/appointments',
      icon: Calendar,
    },
    {
      title: 'Transactions',
      link: '/user/transactions',
      icon: Repeat,
    },
    {
      title: 'Reports',
      link: '/user/reports',
      icon: FileText,
    },
    {
      title: 'Settings',
      link: '/user/settings',
      icon: Settings,
    },
  ];

  return (
    <aside className="sticky top-0 w-64 flex flex-col h-screen shadow-sm shadow-primary">
      <div className="flex items-center h-16 pl-10 mb-4">
        <h1 className="text-2xl font-bold">estateEra</h1>
      </div>
      <nav className="flex flex-col flex-grow space-y-2">
        {UserLinks.map((data, index) => (
          <NavLink
            key={index}
            to={data.link}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 ${isActive ? 'bg-blue-500/10 text-blue-500' : 'hover:bg-blue-500/10'
              }`
            }
          >
            {React.createElement(data.icon, { className: 'mr-3 h-5 w-5' })}
            {data.title}
          </NavLink>
        ))}
      </nav>
      <div className='h-[5%] w-full flex flex-col justify-center items-center'>
        <Button className='p-5 bg-blue-500/5 hover:bg-blue-500/10 font-bold w-full'>
          <span className='flex flex-row items-center justify-start h-full w-full gap-3 text-blue-500'>
            <Power size={20} /> Logout
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Leftbar;
