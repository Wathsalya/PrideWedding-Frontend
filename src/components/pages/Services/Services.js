import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <br></br>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <Pricing />
    </>
  );
}

export default Services;
