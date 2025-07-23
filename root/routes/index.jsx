import React from 'react';

import MainLayout from '../Layouts';
import InnerLayout from '../Layouts/InnerLayout';
import SectionalLayout from '../Layouts/SectionLayout';

import { appPaths } from '../constants/paths';

import Home from '../pages/home';
import Error404 from '../pages/error/Error.404';
import Aboutus from '../pages/aboutUs';
import Doctors from '../pages/Doctors';
import Callcenter from '../pages/callcenter';
import Cardiology from '../pages/cardiology';
import NeurosurgeryPage from '../pages/neurosurgery';
import AboutClinic from '../pages/AbouClinic';
import Contacts from '../pages/contacts';
import Control from '../pages/control';
import Healer from '../pages/healer';
import News from '../pages/News';
import NewsDetail from '../pages/newsDetail';
import Orthopedics from '../pages/orthopedics';
import Physiotherapy from '../pages/physiotherapy';
import ResidencyForm from '../pages/residency';
import Submission from '../pages/submission/Submission';
import Otolaryngology from '../pages/otolaryngology';

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
    path: '*',
    element: <Error404 />,
    layout: SectionalLayout,
  },
];

export const privateRoutes = [
  {
    path: appPaths.CARDIOLOGY,
    element: <Cardiology />,
    layout: SectionalLayout,
    breadcrumb: { title: 'cardiology' },
  },
  {
    path: appPaths.NEUROSURGERY,
    element: <NeurosurgeryPage />,
    layout: SectionalLayout,
    breadcrumb: { title: 'neurosurgery' },
  },
  {
    path: appPaths.OTOLARYNGOLOGY,
    element: <Otolaryngology />,
    layout: SectionalLayout,
    breadcrumb: { title: 'otolaryngology' },
  },
  {
    path: appPaths.PHYSIOTHERAPY,
    element: <Physiotherapy />,
    layout: SectionalLayout,
    breadcrumb: { title: 'physiotherapy' },
  },
  {
    path: appPaths.RESIDENCY,
    element: <ResidencyForm />,
    layout: InnerLayout,
    breadcrumb: { title: 'residency' },
  },
  {
    path: appPaths.SUBMISSION,
    element: <Submission />,
    layout: InnerLayout,
    breadcrumb: { title: 'submission' },
  },
  {
    path: appPaths.ORTHOPEDICS,
    element: <Orthopedics />,
    layout: SectionalLayout,
    breadcrumb: { title: 'orthopedics' },
  },
];

const routes = [...publicRoutes, ...privateRoutes];
export default routes;
