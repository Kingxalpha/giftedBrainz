import React from 'react'
import img1 from '../images/stepone.png'
import img2 from '../images/about.png'
import img3 from '../images/steptwo.png'
import img4 from '../images/stepthree.png'

function Work() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div><h1 className='text-xl font-bold border border-black p-4 mt-6'>How It Work</h1></div>
        <div className="cardz grid  lg:grid-cols-2">
            <div className="card1 flex flex-col justify-center items-center">
                <img className='h-[60%]' src={img1} alt="" />
                <p className='w-[45%]'>nigerians and other african countries 
                    can come and challenge one another.
                    <br></br>
                    in a daily active quiz competition and 
                    stand a chance to win cash prize more 
                    than #100,000 weekly/monthly 
                    respectively or it’s equivalent in uSDT.
                </p>
            </div>
            <div className="card1 flex flex-col justify-center items-center">
                <img className='h-[60%]' src={img2} alt="" />
                <p className='w-[45%]'>you will acquire valuable skills 
                    and knowledge in blockchain, 
                    De-fi, nFTs, UI/UX Design, 
                    fashion/cosmetic and so on
                </p>
            </div>
            <div className="card1 flex flex-col justify-center items-center">
                <img className='h-[60%]' src={img3} alt="" />
                <p className='w-[45%]'>you will participate in intellectual 
                    contest for a life changing prize. 
                    you have the chance to join our 
                    innovative and creative team.
                </p>
            </div>
            <div className="card1 flex flex-col justify-center items-center">
                <img className='h-[60%]' src={img4} alt="" />
                <p className='w-[45%]'>you enjoy steady affiliate 
                    earnings. refer your friends and 
                    earn 40% affiliate commision.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Work