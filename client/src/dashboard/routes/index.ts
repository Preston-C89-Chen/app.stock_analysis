import { lazy } from 'react';


interface Route {
  path: string;
  title: string;
  component?: JSX.Element;
}

const coreRoutes: Route[] = [
  {
    path: '/tables',
    title: 'Tables'
  }
];
