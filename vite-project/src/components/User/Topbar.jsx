import React from 'react';
import { Bell } from 'lucide-react'; // Import the notification icon
import { ModeToggle } from '../mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Topbar = () => {
  return (
    <div className='sticky top-0 h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary z-10 bg-background'>
      <div className='w-[95%] h-full flex items-center justify-end gap-4'>
        {/* Right corner: Notification, ModeToggle, and Avatar */}
        <Bell size={20} className='cursor-pointer' />
        <ModeToggle className='border-0 focus:outline-none focus:shadow-none' />
        <div className='flex flex-col items-center'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
