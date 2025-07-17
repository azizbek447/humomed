import { appPaths } from '../constants/paths';
import MainLayout from '../Layouts';
import InnerLayout from '../Layouts/InnerLayout';
import Error404 from '../pages/error/Error.404';
import Home from '../pages/home';
import Calculation from '../pages/services/calculation';
import Integration from '../pages/services/integration';
import Scheduling from '../pages/services/scheduling';

export const publicRoutes = [
  {
    path: appPaths.HOME,
    component: <Home />,
    layout: MainLayout,
  },
 
  {
    path: appPaths.SERVICE_WORK_SCHEDULE,
    component: <Scheduling />,
    layout: InnerLayout,
  },
  
 
  {
    path: appPaths.SERVICE_SALARY,
    component: <Calculation />,
    layout: InnerLayout,
  },
 
  
  {
    path: appPaths.SERVICE_INTEGRATION,
    component: <Integration />,
    layout: InnerLayout,
  },

  {
    path: '*',
    component: <Error404 />,
    layout: MainLayout,
  },
];

export const privateRoutes = [];
