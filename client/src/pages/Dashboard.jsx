import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import Banner from '../partials/Banner';
import RadixSidebar from '../partials/RadixSidebar';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-12">
      <RadixSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className="grid col-span-12">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main className="col-span-8 overflow-y-auto overflow-x-hidden" >
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"></div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;