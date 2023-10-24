import React, { useState } from 'react';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="bg-white col-span-12 h-16 w-full">
      <div className="">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <h2>Header</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
