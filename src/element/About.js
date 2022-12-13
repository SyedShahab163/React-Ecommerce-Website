import React from 'react'
import HeroSection from '../component/Hero_section'

const About = () => {
  const data = {
    name : "Shahab Ecommerce",
  }
  return (  <HeroSection myData={data}/>
    // <div>About
    //     <h1> 786110</h1>
    // </div>
  )
}

export default About