import React from 'react'
import cup from '../images/cup.png';
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import frame from '../images/Frame.png';
import telegram from '../images/telegram.png';
import { Link } from 'react-router-dom';

function Quiz() {
  return (
    <div className='quiz w-[100%] flex flex-col justify-center items-center gap-14 mt-20 text-white'>
        <div className='quiz-border w-[80%] lg:flex justify-center items-center rounded-2xl bg-blue-600'>
            <div className='quiz-text flex flex-col justify-center lg:w-[40%] gap-2 text-left'>
                <h1 className='font-bold text-2xl'>Take Quiz And Earn  Points</h1>
                <p>Win And Earn Points To 
                    Purchase Course And 
                    Acquire More Skills 
                    From The Experts.</p>
                <Link to={'/SignUp'}>
                <button className='w-[30%] mt-10 p-4 border-0 text-white cursor-pointer rounded-2xl bg-blue-950'>Play Now</button>

                </Link>
            </div>

            <div className='cupImg'>
                <img className='w-[350px]' src={cup} alt="" />
            </div>
        </div>

        <div className='social w-[70%] flex gap-4 mb-7 items-center'>
            <img className='w-[100px]' src={logo} alt="" />
            <img className='w-[40px]' src={facebook} alt="" />
            <img className='w-[40px]' src={twitter} alt="" />
            <img className='w-[40px]' src={frame} alt="" />
            <img className='w-[40px]' src={telegram} alt="" />

        </div>
    </div>
  )
}

export default Quiz