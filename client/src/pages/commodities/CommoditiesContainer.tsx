import React from 'react';
import Chart from './charts/commodities/CommoditiesChart';
import data from './charts/commodities/mock_cl.json';

const CommoditiesContainer = () => {
  return (
    <div>

      <Chart data={data?.historical} />
    </div>
  )
}

export default CommoditiesContainer;
