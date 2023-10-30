import React from 'react'
import { useState } from 'react';
import gifted from '../images/logo.png'
import clock from '../images/clock.png'
import run from '../images/run.png';
import leader from '../images/leader.png';
import win from '../images/win.png'
import course from '../images/course.png';
import payment from '../images/payment.png';
import referral from '../images/referral.png';
import earning from '../images/earning.png';
import setting from '../images/setting.png';
import community from '../images/community.png';
import help from '../images/help.png';

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
         <div className='w-[250px] items-center border-red-100 border-solid'>
            <div>
                <div><img  src={gifted} alt="gifted-logo" /></div>
            </div>
            <div className='bg-blue-600 flex items-center text-white pr-15 text-center'>
                <div>
                    <img  className='w-[50px]' src={clock} alt="clock" />
                </div>
                <div><b>Dashboard</b></div>
            </div>
        <div>
            <div className='flex items-center  text-center pt-16'>
                <img className='w-[35px]' src={run} alt="run" />
                <b>Quiz Competition</b>
            </div>
            <div className='flex items-center pt-16'>
                <img className='w-[35px]' src={leader} alt="leader" />
                <b>Quiz Leaderboard</b>
            </div>
            <div className='flex items-center pt-16'>
                <img className='w-[35px]' src={win} alt="win" />
                <b>Spin to Win</b>
            </div>
            <div className='flex items-center pt-16'>
                <img className='w-[35px]' src={course} alt="course" />
                <b>Courses</b>
            </div>
            <div className='flex items-center pt-16'>
                <img className='w-[35px]' src={payment} alt="payment" />
                <b>Payment</b>
            </div>
            <div className='flex items-center pt-16'>
                <img className='w-[35px]' src={referral} alt="referral" />
                <b>Referral History</b>
            </div>
            <div className='flex items-center pt-16'>
                <img className='w-[35px]' src={earning} alt="earning" />
                <b>Earning History</b>
            </div>
            <div className='bgsection bg-blue-600 mt-24'>
            <div className='flex items-center pt-12'>
                <img className='w-[35px]' src={setting} alt="setting" />
                <b>Setting</b>
            </div>
            <div className='flex items-center pt-12'>
                <img className='w-[35px]' src={help} alt="help" />
                <b>Get Help</b>
            </div>
            <div className='flex items-center pt-12'>
                <img className='w-[35px]' src={community} alt="community" />
                <b>Community</b>
            </div>
            </div>
      </div>

    </div>
  )
}

export default Sidebar