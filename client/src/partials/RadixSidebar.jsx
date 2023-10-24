import React from 'react';
import { Text } from '@radix-ui/themes';
const RadixSidebar = () => {
  return (
    <div  className="fixed top-0 left-0 w-1/5 h-full bg-gray-50">
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
