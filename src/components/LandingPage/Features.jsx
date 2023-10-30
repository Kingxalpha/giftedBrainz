import React from 'react'
import img1 from '../images/card.png';
import img2 from '../images/spin.png';
import img3 from '../images/cancel.png';

function Features() {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <h1>Features & Benefits</h1>
        <div className='lg:flex gap-10 mt-10'>
            <div className="cardw flex flex-col items-center ">
              <img className='w-[350px] bg-gray-400' src={img1} alt="" />
              <h2>fast withdrawals</h2>
              <p>we pay within 10-24hrs to your specific bank account.</p>
            </div>
            <div className="cardw flex flex-col items-center">
              <img className='w-[350px] bg-gray-400' src={img2} alt="" />
              <h2>Spin And Win</h2>
              <p>win amazing price by simply spinning the wheel.</p>
            </div>
            <div className="cardw flex flex-col items-center ">
              <img className='w-[350px] bg-gray-400' src={img3} alt="" />
              <h2>referrals is not compulsory</h2>
            </div>
        </div>
    </div>
  )
}

export default Features