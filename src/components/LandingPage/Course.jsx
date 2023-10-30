import React from 'react'

function Course() {
  return (
    <div className='course flex flex-col justify-center items-center mt-20 text-white '>
        <div className='AvailCourse mb-10'>
            <h1>Availabe Course</h1>
        </div>

        <div className='courseBody grid lg:grid-cols-2 gap-10 w-[50%]'>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3'>
                    <h1>UI/UX Design</h1>
                    <button>+</button>
                </div>
                <div className='w-[100%] bg-blue-600 h-[70%] text-center'>
                    <p> you’ll be taught by our 
                        experience and qualified 
                        teachers, and get update
                        through our website, 
                        telegram page and 
                        newsletters.</p>
                </div>
            </div>

            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3'>
                    <h1>Graphics Design</h1>
                    <button >+</button>
                </div>
            </div>

            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3'>
                    <h1>Backend Web Development</h1>
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center bg-blue-600 p-3 px-3 justify-between'>
                    <h1>african health and herb methodology</h1>
                    
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3'>
                    <h1>Front-End Web Development</h1>
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3'>
                    <h1>True Africa History</h1>
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3'>
                    <h1>Page Management</h1>
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3'>
                    <h1>Quantum Mechanics</h1>
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3 px-5'>
                    <h1>Skin Care Production</h1>
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3 px-3'>
                    <h1>DeFi & NFTs</h1>
                    <button >+</button>
                </div>
            </div>
            <div className='Gen-Body'>
                <div className='head flex items-center justify-between bg-blue-600 p-3 px-3'>
                    <h1>Advance Cryptocurrency</h1>
                    <button >+</button>
                </div>
            </div>
         
        </div> 
    </div>
  )
}

export default Course