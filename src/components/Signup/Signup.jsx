import React from 'react'
import gifted from '../images/logo.png'
import google from '../images/google.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='SignUp w-[100%] h-[100vh] flex justify-center items-center bg-white'>

    <div className='SignIn-border w-[35%] h-[80vh] flex flex-col items-center gap-2 bg-white shadow-xl'>
        <div className='logoImage'>
              <img className='w-[22%] mt-5' src={gifted} alt="" />
        </div>

        <h1>Sign Up</h1>

        <div className='email flex w-[60%] flex-col gap-1'>
            <p>Username</p>
            <input className='w-[100]' type="email" />
        </div>
        <div className='email  flex w-[60%] flex-col gap-1'>
            <p>Enter Your Email</p>
            <input className='w-[100%]' type="email" />
        </div>
        <div className='password  flex w-[60%] flex-col gap-1'>
            <p>Password</p>
            <input className='w-[100%]' type="password" />
        </div>

        <div className='checkbox flex w-[60%] gap-2'>
          <input type='checkbox' />
          <p>I Have Agree To The Terms 
            & Conditions And The Privacy 
            & Policy Of This Website.</p>
        </div>

        <div className='signUp-btn w-[60%] flex items-center gap-5'>
            <Link to={'/Planpage'}><button>Sign Up</button></Link>
            <p>OR</p>
            <div className='google'>
                <img className=' w-[15%] rounded-2xl border-xl' src={google} alt="" />
            </div>
        </div>

        <div className='createAcct w-[60] flex'>
            <p>Already Have An Existing Account?   
                <Link to={'/signin'}>
                <span className='text-blue-600'>
                  <h1>Click Here.....</h1>
                  </span>
                </Link>
            </p>
          
        </div>

        <div className='signUp-footer flex w-[100%] justify-center items-center gap-4 mt-2.5 bg-blue-600 h-[100px] text-white'>
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

export default Signup