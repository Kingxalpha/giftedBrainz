import React from 'react'
import Sidebar from './Sidebar'
import img1 from '../images/abd1.png'
import img2 from '../images/abd2.png'
import img3 from '../images/abd3.png'

function Dashboard() {
  return (
    <div>
    <nav className='flex mt-[20px]  justify-between items-center'>
      <b>Dashboard</b>
      <input type="text" name="" id="" className='rounded border-green pr-[100px] pt-[15px] text-center justify-center' />
      <div className='flex mr-[15px]'>
      <img src={img3} className='h-[50px]' alt="" />
      <img src={img2} className='h-[50px]' alt="" />
      </div>
    </nav>
    <div className='mt-[50px]'>
    <h1 className="text-3xl">Welcome Jays</h1>
<div className="pointbox flex justify-between pt-6">
  <div className="bg-blue-600 rounded text-center flex flex-col items-center w-120 h-250">
    <p className="text-white text-1xl">Total Earning</p>
    <b className="text-white text-3xl">#203,978</b>
  </div>
  <div className="bg-green-600 rounded text-center flex flex-col items-center w-300 h-150">
    <p className="text-white text-1xl">Total Points</p>
    <b className="text-white text-3xl">2000SQP</b>
  </div>
  <div className="bg-orange-600 rounded text-center flex flex-col items-center w-300 h-150">
    <p className="text-white text-1xl">Referral Earning</p>
    <b className="text-white text-3xl">#12,000</b>
  </div>
</div>
<div class="w-full">
  <table class="w-full border-separate border border-collapse border-gray-200">
    <thead>
      <tr>
        <th class="bg-gray-700 text-white p-2">Header 1</th>
        <th class="bg-gray-700 text-white p-2">Header 2</th>
        <th class="bg-gray-700 text-white p-2">Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td class="p-2">Row 1, Cell 1</td>
        <td class="p-2">Row 1, Cell 1</td>
        <td class="p-2">Row 1, Cell 2</td>
        <td class="p-2">Row 1, Cell 3</td>
      </tr>
      <tr>
      <td class="p-2">Row 1, Cell 1</td>
        <td class="p-2">Row 2, Cell 1</td>
        <td class="p-2">Row 2, Cell 2</td>
        <td class="p-2">Row 2, Cell 3</td>
      </tr>
      <tr>
      <td class="p-2">Row 1, Cell 1</td>
        <td class="p-2">Row 3, Cell 1</td>
        <td class="p-2">Row 3, Cell 2</td>
        <td class="p-2">Row 3, Cell 3</td>
      </tr>
      <tr>
      <td class="p-2">Row 1, Cell 1</td>
        <td class="p-2">Row 4, Cell 1</td>
        <td class="p-2">Row 4, Cell 2</td>
        <td class="p-2">Row 4, Cell 3</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

        
      </div>
    

  )
}

export default Dashboard