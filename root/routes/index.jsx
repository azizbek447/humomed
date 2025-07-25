import React from 'react';

import MainLayout from '../Layouts';
import InnerLayout from '../Layouts/InnerLayout';
import SectionalLayout from '../Layouts/SectionLayout';

import { appPaths } from '../constants/paths';

// Pages
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
import Otolaryngology from '../pages/otolaryngology';

// Allservices
import Allservices from '../pages/allservices';
import Allergist from '../pages/allservices/allergist';
import Dermatologist from '../pages/allservices/dermatologist';
import Endocrinologist from '../pages/allservices/endocrinologist';
import Gastroenterologist from '../pages/allservices/gastroenterologist';
import Gynecologist from '../pages/allservices/gynecologist';
import InpatientWard from '../pages/allservices/inpatientWard';
import Laboratory from '../pages/allservices/laboratory';
import Massagetherapy from '../pages/allservices/massageTherapy';
import Neurologist from '../pages/allservices/neurologist';
import Operatingroom from '../pages/allservices/operatingRoom';
import Pediatricgastro from '../pages/allservices/pediatricGastro';
import Pediatrician from '../pages/allservices/pediatrician';
import Pediatricneuro from '../pages/allservices/pediatricNeuro';
import Procedureroom from '../pages/allservices/procedureRoom';
import Proctologist from '../pages/allservices/proctologist';
import Pulmonologist from '../pages/allservices/pulmonologist';
import Rheumatologist from '../pages/allservices/rheumatologist';
import Therapist from '../pages/allservices/therapist';
import Traumasurgeon from '../pages/allservices/traumaSurgeon';
import Ultrasound from '../pages/allservices/ultrasound';
import Urologist from '../pages/allservices/urologist';
import Xray from '../pages/allservices/XRay';
import Infectiousdoc from '../pages/allservices/infectiousDoc';

export const publicRoutes = [
  {
    path: appPaths.HOME,
    element: <Home />,
    layout: MainLayout,
    breadcrumb: { title: 'main' }
  },
  {
    path: appPaths.DOCTORS,
    element: <Doctors />,
    layout: MainLayout,
    breadcrumb: { title: 'doctors' }
  },
  {
    path: appPaths.ABOUT_US,
    element: <Aboutus />,
    layout: MainLayout,
    breadcrumb: { title: 'about_us' }
  },
  {
    path: appPaths.CALL_CENTER,
    element: <Callcenter />,
    layout: MainLayout,
    breadcrumb: { title: 'call_center' }
  },
  {
    path: appPaths.ABOUT_CLINIC,
    element: <AboutClinic />,
    layout: MainLayout,
    breadcrumb: { title: 'about_clinic' }
  },
  {
    path: appPaths.CONTACTS,
    element: <Contacts />,
    layout: MainLayout,
    breadcrumb: { title: 'contacts' }
  },
  {
    path: appPaths.CONTROL,
    element: <Control />,
    layout: MainLayout,
    breadcrumb: { title: 'control' }
  },
  {
    path: appPaths.HEALER,
    element: <Healer />,
    layout: MainLayout,
    breadcrumb: { title: 'healer' }
  },
  {
    path: appPaths.NEWS,
    element: <News />,
    layout: MainLayout,
    breadcrumb: { title: 'news' }
  },
  {
    path: appPaths.NEWS_DETAIL,
    element: <NewsDetail />,
    layout: MainLayout,
    breadcrumb: { title: 'news_detail' }
  },
  {
    path: appPaths.ALLSERVICES,
    element: <Allservices />,
    layout: MainLayout,
    breadcrumb: { title: 'allservices' }
  },
  {
    path: appPaths.ALLERGIST,
    element: <Allergist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'allergist' }
  },
  {
    path: appPaths.DERMATOLOGIST,
    element: <Dermatologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'dermatologist' }
  },
  {
    path: appPaths.ENDOCRINOLOGIST,
    element: <Endocrinologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'endocrinologist' }
  },
  {
    path: appPaths.GASTROENTEROLOGIST,
    element: <Gastroenterologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'gastroenterologist' }
  },
  {
    path: appPaths.GYNECOLOGIST,
    element: <Gynecologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'gynecologist' }
  },
  {
    path: appPaths.RHEUMATOLOGIST,
    element: <Rheumatologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'rheumatologist' }
  },
  {
    path: appPaths.INFECTIOUSDOC,
    element: <Infectiousdoc />,
    layout: SectionalLayout,
    breadcrumb: { title: 'infectiousdoc' }
  },
  {
    path: appPaths.INPATIENTWARD,
    element: <InpatientWard />,
    layout: SectionalLayout,
    breadcrumb: { title: 'inpatient-ward' }
  },
  {
    path: appPaths.LABORATORY,
    element: <Laboratory />,
    layout: SectionalLayout,
    breadcrumb: { title: 'laboratory' }
  },
  {
    path: appPaths.MASSAGETHERAPY,
    element: <Massagetherapy />,
    layout: SectionalLayout,
    breadcrumb: { title: 'massage-therapy' }
  },
  {
    path: appPaths.NEUROLOGIST,
    element: <Neurologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'neurologist' }
  },
  {
    path: appPaths.OPERATINGROOM,
    element: <Operatingroom />,
    layout: SectionalLayout,
    breadcrumb: { title: 'operating-room' }
  },
  {
    path: appPaths.PEDIATRICGASTRO,
    element: <Pediatricgastro />,
    layout: SectionalLayout,
    breadcrumb: { title: 'pediatric-gastro' }
  },
  {
    path: appPaths.PEDIATRICIAN,
    element: <Pediatrician />,
    layout: SectionalLayout,
    breadcrumb: { title: 'pediatrician' }
  },
  {
    path: appPaths.PEDIATRICNEURO,
    element: <Pediatricneuro />,
    layout: SectionalLayout,
    breadcrumb: { title: 'pediatric-neuro' }
  },
  {
    path: appPaths.PROCEDUREROOM,
    element: <Procedureroom />,
    layout: SectionalLayout,
    breadcrumb: { title: 'procedure-room' }
  },
  {
    path: appPaths.PROCTOLOGIST,
    element: <Proctologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'proctologist' }
  },
  {
    path: appPaths.PULMONOLOGIST,
    element: <Pulmonologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'pulmonologist' }
  },
  {
    path: appPaths.THERAPIST,
    element: <Therapist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'therapist' }
  },
  {
    path: appPaths.TRAUMASURGEON,
    element: <Traumasurgeon />,
    layout: SectionalLayout,
    breadcrumb: { title: 'trauma-surgeon' }
  },
  {
    path: appPaths.ULTRASOUND,
    element: <Ultrasound />,
    layout: SectionalLayout,
    breadcrumb: { title: 'ultrasound' }
  },
  {
    path: appPaths.UROLOGIST,
    element: <Urologist />,
    layout: SectionalLayout,
    breadcrumb: { title: 'urologist' }
  },
  {
    path: appPaths.XRAY,
    element: <Xray />,
    layout: SectionalLayout,
    breadcrumb: { title: 'xray' }
  },
  {
    path: '*',
    element: <Error404 />,
    layout: SectionalLayout
  }
];

export const privateRoutes = [
  {
    path: appPaths.CARDIOLOGY,
    element: <Cardiology />,
    layout: SectionalLayout,
    breadcrumb: { title: 'cardiology' }
  },
  {
    path: appPaths.NEUROSURGERY,
    element: <NeurosurgeryPage />,
    layout: SectionalLayout,
    breadcrumb: { title: 'neurosurgery' }
  },
  {
    path: appPaths.OTOLARYNGOLOGY,
    element: <Otolaryngology />,
    layout: SectionalLayout,
    breadcrumb: { title: 'otolaryngology' }
  },
  {
    path: appPaths.PHYSIOTHERAPY,
    element: <Physiotherapy />,
    layout: SectionalLayout,
    breadcrumb: { title: 'physiotherapy' }
  },
  {
    path: appPaths.ORTHOPEDICS,
    element: <Orthopedics />,
    layout: SectionalLayout,
    breadcrumb: { title: 'orthopedics' }
  }
];

const routes = [...publicRoutes, ...privateRoutes];

export default routes;
