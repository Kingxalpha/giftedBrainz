import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Work from './Work'
import Learn from './Learn'
import Course from './Course'
import Participate from './Participate'
import Features from './Features'
import Quiz from './Quiz'
import Footer from './Footer'

function Landing() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Learn/>
      <Course/>
      <Participate/>
      <Features/>
      <Quiz/>
      <Footer/>
    </div>
  )
}

export default Landing