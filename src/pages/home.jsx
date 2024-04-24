import React from 'react'
import Hero  from '../components/hero/Hero';
import AboutUs  from '../components/about/About';
import Features  from '../components/feature/Feature';
import Header from '../components/navbar/Header';
import Footer from '../components/footer/Footer';

const home = () => {
  return (
   <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Features/>
      <Footer/>
   </>
  )
}

export default home