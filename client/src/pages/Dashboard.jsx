import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import Banner from '../partials/Banner';
import RadixSidebar from '../partials/RadixSidebar';
import { Separator } from '@/components/ui/separator';
import FinancialReportTable from '../partials/tables/financial-reports';
import DashMainMenu from '../components/DashMainMenu';
import DashMainNav from '../components/DashMainNav';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const parentRoute = "dashbaord";
  return (
    <div className="flex h-screen" style={{"height":"100vh"}}>
      <div className="flex-auto flex-col h-full w-full flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main className="flex-auto m-2" >
          <DashMainMenu/>
          <DashMainNav/>
          <Outlet />

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
