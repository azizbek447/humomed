import MainLayout from '../Layouts';
import InnerLayout from '../Layouts/InnerLayout';

import { appPaths } from '../constants/paths';

import Home from '../pages/home';
import Error404 from '../pages/error/Error.404';
import Doctors from '.././pages/ Doctors'; 
import Aboutus from '../pages/aboutUs';
import Callcenter from '../pages/callcenter';
import Cardiology from '../pages/cardiology';

import Calculation from '../pages/services/calculation';
import Integration from '../pages/services/integration';
import Scheduling from '../pages/services/scheduling';
import NeurosurgeryPage from '.././pages/neurosurgery'; 

import AboutTheClinic from 'root/pages/AboutTheClinic';
import Contacts from 'root/pages/contacts';
import Control from 'root/pages/control';
import Healer from 'root/pages/healer';
import News from 'root/pages/News';
import NewsDetail from 'root/pages/newsDetail';
import Orthopedics from 'root/pages/orthopedics';
import Physiotherapy from 'root/pages/physiotherapy';
import ResidencyForm from 'root/pages/submission/Submission';
import Submission from 'root/pages/submission/Submission';
import Otolaryngology from 'root/pages/otolaryngology';

const routes = [
  {
    path: appPaths.HOME,
    component: Home,
    layout: MainLayout,
  },
  {
    path: appPaths.DOCTORS,
    component: Doctors,
    layout: MainLayout,
  },
  {
    path: appPaths.ABOUT_US,
    component: Aboutus,
    layout: MainLayout,
  },
  {
    path: appPaths.CALL_CENTER,
    component: Callcenter,
    layout: MainLayout,
  },
  {
    path: appPaths.CARDIOLOGY,
    component: Cardiology,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_CALCULATION,
    component: Calculation,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_INTEGRATION,
    component: Integration,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_SCHEDULING,
    component: Scheduling,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_NEUROSURGERY,
    component: NeurosurgeryPage,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_OTOLARYNGOLOGY,
    component: Otolaryngology,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_PHYSIOTHERAPY,
    component: Physiotherapy,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_RESIDENCY,
    component: ResidencyForm,
    layout: MainLayout,
  },
  {
    path: appPaths.SERVICE_SUBMISSION,
    component: Submission,
    layout: MainLayout,
  },
  {
    path: appPaths.ABOUT_CLINIC,
    component: AboutTheClinic,
    layout: MainLayout,
  },
  {
    path: appPaths.CONTACTS,
    component: Contacts,
    layout: MainLayout,
  },
  {
    path: appPaths.CONTROL,
    component: Control,
    layout: MainLayout,
  },
  {
    path: appPaths.HEALER,
    component: Healer,
    layout: MainLayout,
  },
  {
    path: appPaths.NEWS,
    component: News,
    layout: MainLayout,
  },
  {
    path: appPaths.NEWS_DETAIL,
    component: NewsDetail,
    layout: MainLayout,
  },
  {
    path: appPaths.ORTHOPEDICS,
    component: Orthopedics,
    layout: MainLayout,
  },
  {
    path: '*',
    component: Error404,
    layout: InnerLayout,
  },
];

export default routes;
