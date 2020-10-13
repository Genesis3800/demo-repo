import React from 'react';

import HeaderHero from '../../components/HeaderHero/index'
import PopularCategory from '../../components/PopularCategory/index'
import Benefits from '../../components/Benefits/index'
import Cta from '../../components/Cta/index'
import Testimonial from '../../components/Testimonial/index'
import Team from '../../components/Team/index'

function LandingPage() {
  return (
    <div>
      <HeaderHero />
      <PopularCategory />
      <Benefits />
      <Cta />
      <Testimonial />
      
      <Team />
    </div>
  );
}

export default LandingPage;
