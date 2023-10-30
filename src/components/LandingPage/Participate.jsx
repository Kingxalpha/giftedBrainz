import React from 'react'

function Participate() {
  return (
    <div className='flex flex-col justify-center items-center mt-20  '>
            <h1 className='mb-10'>How To Participate</h1>
        <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
            <div className=' lg:ml-40'>
                <h2 className='font-bold'>1. Register</h2>
                <p className='w-[50%]'>sign up to become a member of gifted brainz.</p>
            </div>
            <div>
                <h2 className='font-bold'>2. Take A Challenge</h2>
                <p className='w-[50%]'>particicpate in a challenge.answer 15 question to earn (sQP).</p>
            </div>
            <div className='lg:ml-40'>
                <h2 className='font-bold'>3. Choose Your Plan</h2>
                <p className='w-[50%]'>subscribe directly on the site with weekly plan or monthly plan.</p>
            </div>
            <div>
                <h2 className='font-bold'>4. Refer And Earn</h2>
                <p className='w-[50%]'>invite your friend. let them about this platform and you’ll earn 40% affiliate commision..</p>
            </div>

        </div>
    </div>
  )
}

export default Participate