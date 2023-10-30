import React from 'react'

function Footer() {
  return (
    <footer className='w-[100%] flex flex-col gap-6 bg-blue-600 items-center'>
            <div className='heading flex justify-center items-center mt-5'>
                <h1>Join Our Newsletter</h1>
            </div>
            <div className='newsletter w-[100%] flex justify-center items-center'>
                <input className='w-[30%] h-[50px] border-0 text-center rounded-2xl' type="email" placeholder='hello@smartquiz.com'/>
                <button className='lg:w-[10%] h-[50px] rounded-2xl cursor-pointer bg-white border-0 text-red-600 font-extrabold'>JOIN NOW</button>
            </div>

                <div className='footer-menu lg:w-[100%] lg:flex justify-center gap-44 mt-7 '>
                    <div className='footer-page text-left'>
                        <h1>Products</h1>
                        <p className='mt-4'>Course</p>
                        <p className='mt-4' >Quiz</p>
                        <p  className='mt-4'>Refer Program</p>
                        <p  className='mt-4'>Quiz</p>
                    </div>

                    <div className='footer-page text-left'>
                        <h1>About</h1>
                        <p  className='mt-4'>What We Do</p>
                        <p  className='mt-4'>Our Mission</p>
                        <p  className='mt-4'>Contact Us</p>
                        <p className='mt-4'>FAQ</p>
                        <p  className='mt-4'>Privacy  & Policy</p>
                    </div>

                    <div className='footer-page text-left'>
                        <h1>Resources</h1>
                        <p  className='mt-4'>Docs</p>
                        <p  className='mt-4'>careers</p>
                        <p  className='mt-4'>Blog</p>
                    
                    </div>
                </div>
                <p>© 2022 Copyright By SmartQuiz. All Right Reserved</p>
    </footer>
  )
}

export default Footer