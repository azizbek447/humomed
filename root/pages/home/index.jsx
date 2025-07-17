import React from 'react';

import Main from './Main.jsx';
import OurServices from './OurServices .jsx';
import WhoAreWe from './WhoArewe.jsx';
import Whyus from './Whyus.jsx';
import OurSpecialists from './OurSpecialists.jsx';
import PatientFeedback from './PatientFeedback.jsx';
import ClinicNews from './ClinicNews.jsx';
import HaveAQuestion from './HaveAQuestion.jsx';
import MapLocation from './MapLocation.jsx';



const Home = () => {
  return (
    <div>
      <Main />
      <OurServices />
      <WhoAreWe />
      <Whyus />
      <OurSpecialists />
      <PatientFeedback />
      <ClinicNews />
      <HaveAQuestion />
      <MapLocation />
    </div>
  );
};

export default React.memo(Home);
