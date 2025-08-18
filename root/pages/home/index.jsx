import React from 'react';

import Carousel from '../../components/Carousel.jsx';
import ClinicNews from './ClinicNews.jsx';
import FridaySale from './FridaySale.jsx';
import HaveAQuestion from './HaveAQuestion.jsx';
import Main from './Main.jsx';
import MapLocation from './MapLocation.jsx';
import OurServices from './OurServices .jsx';
import PatientFeedback from './PatientFeedback.jsx';
import WhoAreWe from './WhoArewe.jsx';
import Whyus from './Whyus.jsx';

const Home = () => {
  return (
    <div>
      <Main />
      <OurServices />
      <WhoAreWe />
      <Whyus />
      <FridaySale />
      <Carousel />
      <PatientFeedback />
      <ClinicNews />
      <HaveAQuestion />
      <MapLocation />
    </div>
  );
};

export default React.memo(Home);
