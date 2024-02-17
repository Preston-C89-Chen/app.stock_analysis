import React, { useState } from 'react';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';
import TextFieldSearch from '../components/TextFieldSearch';
function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  let t = 5/0
  debugger
  return (
    <header className="flex h-20 items-center w-full dark:bg-slate-800" style={{padding:"1rem", columnGap:"1rem"}}>
        <TextFieldSearch />
        <ThemeToggle />
    </header>
  );
}

export default Header;
