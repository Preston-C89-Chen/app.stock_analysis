import React from 'react';

interface DashboardContainerProps {
  children: React.ReactNode;
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({ children }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        {/* Header content goes here */}
      </div>
      <div className="dashboard-content">
        {children}
      </div>
      <div className="dashboard-footer">
        {/* Footer content goes here */}
      </div>
    </div>
  );
};

export default DashboardContainer;
