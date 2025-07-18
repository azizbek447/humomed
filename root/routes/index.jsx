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

import AboutTheClinic from '../pages/About_Clinic';
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

const routes = [
  {
    path: appPaths.HOME,
    element: <Home />,
    layout: MainLayout,
  },
  {
    path: appPaths.DOCTORS,
    element: <Doctors />,
    layout: MainLayout,
  },
  {
    path: appPaths.ABOUT_US,
    element: <Aboutus />,
    layout: MainLayout,
  },
  {
    path: appPaths.CALL_CENTER,
    element: <Callcenter />,
    layout: MainLayout,
  },
  {
    path: appPaths.CARDIOLOGY,
    element: <Cardiology />,
    layout: SectionalLayout,
  },


  {
    path: appPaths.WORK_SCHEDULE,
    element: <Scheduling />,
    layout: InnerLayout,
  },
  {
    path: appPaths.NEUROSURGERY,
    element: <NeurosurgeryPage />,
    layout:  SectionalLayout,
  },
  {
    path: appPaths.OTOLARYNGOLOGY,
    element: <Otolaryngology />,
    layout:  SectionalLayout,
  },
  {
    path: appPaths.PHYSIOTHERAPY,
    element: <Physiotherapy />,
    layout:  SectionalLayout,
  },
  {
    path: appPaths.RESIDENCY,
    element: <ResidencyForm />,
    layout: InnerLayout,
  },
  {
    path: appPaths.SUBMISSION,
    element: <Submission />,
    layout: MainLayout,
  },
  {
    path: appPaths.ABOUT_CLINIC,
    element: <AboutTheClinic />,
    layout: MainLayout,
  },
  {
    path: appPaths.CONTACTS,
    element: <Contacts />,
    layout: MainLayout,
  },
  {
    path: appPaths.CONTROL,
    element: <Control />,
    layout: MainLayout,
  },
  {
    path: appPaths.HEALER,
    element: <Healer />,
    layout: MainLayout,
  },
  {
    path: appPaths.NEWS,
    element: <News />,
    layout: MainLayout,
  },
  {
    path: appPaths.NEWS_DETAIL,
    element: <NewsDetail />,
    layout: MainLayout,
  },
  {
    path: appPaths.ORTHOPEDICS,
    element: <Orthopedics />,
    layout:  SectionalLayout,
  },
  {
    path: '*',
    element: <Error404 />,
    layout: SectionalLayout,
  },
];

export default routes;
