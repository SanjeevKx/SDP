import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Leftbar from '@/components/User/Leftbar';
import Topbar from '@/components/User/Topbar';
import { Outlet } from 'react-router-dom';
import {authService} from '@/services/auth';
import {User} from '@/services/user'; // Assuming you have this service to get the username

const UserLayout = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isLoggedIn() || authService.getUserRole() !== 'USER') {
        navigate('/login');
      } else {
        const usernameData = await User.getUsername();
        setUsername(usernameData);
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <Leftbar />
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <Topbar username={username} />
        <div className='h-[92vh] w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;