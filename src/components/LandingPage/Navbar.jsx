import React from 'react'
import gifted from '../images/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar flex items-center justify-around'>
         <div className='logoImg w-24'>
            <img src={gifted} alt="" />
         </div>
        <div className='page lg:flex gap-20 items-center sm:hidden'>
          <Link to={''}>Course</Link>
          <Link to={''}>Career</Link>
          <Link to={''}>About Us</Link>
              <Link to={'/signin'}><button className=' px-10 rounded-xl p-2 bg-blue-600 text-white border-0'>Sign In</button></Link>
        </div>
        <button className='menuBar lg:hidden bg-blue-600 rounded-full'>=</button>   

          <div className=" hidden">
              <Link to={'/Course'}>Course</Link>
              <Link to={''}>Career</Link>
              <Link to={''}>About Us</Link>
              <Link to={'/signin'}><button>Sign In</button></Link>
              
        </div> 
    </div>
  )
}

export default Navbar