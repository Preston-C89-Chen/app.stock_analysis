import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Text } from '@radix-ui/themes';

const RadixSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpaned = localStorage.getItem('sidebar-expanded');

  return (
    <div  className="fixed top-0 left-0 w-1/5 h-full dark:bg-slate-800">
      <div className='border-b border-solid border-b-orange-800 h-16'>
        <Text>Radix Sidebar</Text>
      </div>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};

export default RadixSidebar;
