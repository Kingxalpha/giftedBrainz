import React from 'react'
import learn from '../images/icon1.png'
import quiz from '../images/icon2.png'
import earn from '../images/icon3.png'

function Learn() {
  return (
    <div className='lg:flex items-center justify-center sm:gap-5 lg:ml-20'>
        <div className="crad1 flex flex-col bg-blue-600 items-center text-white p-1 lg:w-[25%] rounded-2xl shadow-xl ">
            <img src={learn} alt="" />
            <h1 className='text-xl'>Learn</h1>
            <p className='w-[40%] text-center mb-10'> you’ll be taught by our 
                experience and qualified 
                teachers, and get update 
                through our website, telegram 
                page and newsletters...
            </p>
            <button className='bg-white p-3 text-blue-600 rounded-xl border-0 font-medium cursor-pointer px-6'>Learn More --></button>
        </div>
        <div className="crad2 flex flex-col items-center text-black p-5 lg:w-[25%] border-2 rounded-2xl shadow-xl">
            <img src={quiz} alt="" />
            <h1 className='text-xl mt-7'>Quiz</h1>
            <p className='w-[43%] text-center m-5'>
                 Test your intellectual 
                 growth and win weekly/
                monthly prizes respectively.
            </p>
            <button className='bg-blue-600 p-3 text-white rounded-xl border-0 font-medium cursor-pointer px-6'>Learn More --></button>
        </div>
        <div className="crad3 flex flex-col items-center text-black p-1 lg:w-[25%] border-2 border-black rounded-2xl shadow-xl ">
            <img src={earn} alt="" />
            <h1 className='text-xl mt-7'>Earn</h1>
            <p className='w-[43%] text-center mb-10'>
                you’ll earn reward by daily 
                incentive, affiliate 
                commission and the quiz 
                you completed
            </p>
            <button className='bg-blue-600 p-3 text-white rounded-xl border-0 font-medium cursor-pointer px-6'>Learn More --></button>
        </div>
    </div>
  )
}

export default Learn