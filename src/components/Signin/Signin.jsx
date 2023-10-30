import React from 'react'
import { Link } from 'react-router-dom'
import google from '../images/google.png'
import gifted from '../images/logo.png'

function Signin() {
  return (
    <div className='SignIn w-[100%] h-[100vh] flex items-center justify-center bg-white'>

      <div className='SignIn-border w-[35%] h-[80vh] flex flex-col items-center gap-3 bg-white shadow-2xl'>
          <div className='logoImage1 w-[30%] mt-10'>
                <img src={gifted} alt="" />
          </div>

          <h1>Sign In</h1>

          <div className='email'>
              <p>Enter Your Email</p>
              <input className='w-[100%] h-[20px] px-8 p-2 rounded-lg' type="email" />
          </div>

          <div className='password'>
              <p>Password</p>
              <input className='w-[100%] h-[20px] px-8 p-2 rounded-lg' type="password" />
          </div>

          <div className='checkbox flex gap-2'>
            <input  type='checkbox' />
            <p>Remember Me</p>
          </div>

          <div className='signIn-btn flex w-[60%] items-center gap-4 justify-center'>
              <Link to={'/Dashboard'}><button className='bg-blue-600 text-white px-14 p-2 cursor-pointer border-0 rounded-lg'>Sign In </button></Link>
              <p>OR</p>
              <div className='google w-[15%] rounded-2xl border-xl'>
                  <img src={google} alt="" />
              </div>
          </div>

          <div className='createAcct w-[60] flex '>
              <p className='text-left flex gap-3'>Don’t Have An Account?   
                  <Link to={'/signup'}>
                  <span className='text-blue-600'>
                    <h1>Click Here.....</h1>
                    </span>
                  </Link>
              </p>
            
          </div>

          <div className='signIn-footer flex w-[100%] justify-center items-center gap-4 mt-2.5 bg-blue-600 h-[100px] text-white'>
              <Link to={'/'}><p>← Back To Home</p></Link>
              <p>|</p>
              <p>Privacy & Policy</p>
              <p>|</p>
              <p>Terms & Condition</p>

          </div>
      </div>
    </div>
  )
}

export default Signin