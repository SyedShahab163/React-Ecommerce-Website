import React from 'react';
import Hero_section from '../component/Hero_section';
import Services from "../component/Services"
import Truested from '../component/Truested';
const Home = () => {
  const data = {
    name : "Shahab Store"
  }
  return (<> <Hero_section myData={data}/>
    <Services/>
    <Truested/>
    </>
  )
}


export default Home