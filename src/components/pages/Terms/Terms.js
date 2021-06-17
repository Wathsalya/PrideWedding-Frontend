import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo} from './Data';


function Products() {
  return (
    <>
    <br></br>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
