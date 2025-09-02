import 'react';

import NewsDetail from '../constants/NewServiceData.jsx';
import { appPaths } from '../constants/paths';
import MainLayout from '../Layouts';
import SectionalLayout from '../Layouts/SectionLayout';
import AboutClinic from '../pages/AbouClinic';
import Aboutus from '../pages/aboutUs';
import Allservices from '../pages/allservices';
import Callcenter from '../pages/callcenter';
import Contacts from '../pages/contacts';
import Control from '../pages/control';
import Doctors from '../pages/Doctors';
import Error404 from '../pages/error/Error.404';
import Healer from '../pages/healer';
// Pages
import Home from '../pages/home';
import News from '../pages/News';
import NewService from '../pages/News/NewsService.jsx';
import Service from '../pages/service';
import Hospital from '../pages/hospital';

export const publicRoutes = [
  {
    path: appPaths.HOME,
    element: <Home />,
    layout: MainLayout,
    breadcrumb: { title: 'main' },
  },
  {
    path: appPaths.DOCTORS,
    element: <Doctors />,
    layout: MainLayout,
    breadcrumb: { title: 'doctors' },
  },
  {
    path: appPaths.ABOUT_US,
    element: <Aboutus />,
    layout: MainLayout,
    breadcrumb: { title: 'about_us' },
  },
  {
    path: appPaths.CALL_CENTER,
    element: <Callcenter />,
    layout: MainLayout,
    breadcrumb: { title: 'call_center' },
  },
  {
    path: appPaths.ABOUT_CLINIC,
    element: <AboutClinic />,
    layout: MainLayout,
    breadcrumb: { title: 'about_clinic' },
  },
  {
    path: appPaths.CONTACTS,
    element: <Contacts />,
    layout: MainLayout,
    breadcrumb: { title: 'contacts' },
  },
  {
    path: appPaths.CONTROL,
    element: <Control />,
    layout: MainLayout,
    breadcrumb: { title: 'control' },
  },
  {
    path: appPaths.HEALER,
    element: <Healer />,
    layout: MainLayout,
    breadcrumb: { title: 'healer' },
  },
  {
    path: appPaths.NEWS,
    element: <News />,
    layout: MainLayout,
    breadcrumb: { title: 'news' },
  },
  {
    path: appPaths.NEWS_DETAIL,
    element: <NewsDetail />,
    layout: MainLayout,
    breadcrumb: { title: 'news_detail' },
  },
  {
    path: appPaths.HOSPITAL,
    element: <Hospital />,
    layout: MainLayout,
    breadcrumb: { title: 'nav.hospital' },
  },
  {
    path: appPaths.ALLSERVICES,
    element: <Allservices />,
    layout: MainLayout,
    breadcrumb: { title: 'allservices' },
  },
  {
    path: appPaths.SERVICE_DETAILS(),
    element: <Service />,
    layout: SectionalLayout,
    breadcrumb: { title: 'allergist' },
  },
  {
    path: appPaths.NEWS_SERVICE_DETAILS(),
    element: <NewService />,
    layout: SectionalLayout,
    breadcrumb: { title: 'news_service' },
  },
  {
    path: '*',
    element: <Error404 />,
    layout: SectionalLayout,
  },
];

export const privateRoutes = [];

const routes = [...publicRoutes, ...privateRoutes];

export default routes;
