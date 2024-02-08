import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import FileUploader from './components/FileUploader';
import FinancialReportTable from './partials/tables/financial-reports';
import FlowContainer from './partials/flowCreator/FlowContainer';
// Import pages
import Dashboard from './pages/Dashboard';
import DashboardClone from './pages/Dashboard_clone';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change


  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="upload" element={<FileUploader />}/>
          <Route path="table" element={<FinancialReportTable />}/>
          <Route path="builder" element={<FlowContainer />}/>
        </Route>

        {/* <Route default element={<Dashboard />} /> */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
