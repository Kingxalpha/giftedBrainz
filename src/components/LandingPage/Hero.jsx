import React from 'react'
import dashboard from '../images/dashboard.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='getStarted lg:flex items-center justify-between'>
        <div className='text h-[40%] w-[60%] ml-10 '>
          <h1 className='text-4xl font-bold w-1/2'>We Breed And Reward Intellectuals</h1>
          <p className='text-xl font-medium'>Earn And Learn Unlimitedly As A Member...</p>
          <Link to={''}><button className='w-[25%] rounded-xl mt-8 bg-blue-600 p-2 text-white border-0'>Get Started</button></Link>
        </div>
        <div className='dashboardImg w-[53%] '>
          <img src={dashboard} alt="" />
        </div>
    </div>
  )
}

export default Hero