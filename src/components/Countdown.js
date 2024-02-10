import React from 'react'

const Countdown = () => {
  return (
    <div className='grid grid-cols-3 gap-3'>
        <div className='flex flex-col items-center leading-[1] bg-[#2c2c2c] p-1'><p className='text-2xl'>09</p><span className='text-sm  font-[300]'>Days</span></div>
        <div className='flex flex-col items-center leading-[1] bg-[#2c2c2c] p-1'><p className='text-2xl'>23</p><span className='text-sm font-[300]'>Hrs</span></div>
        <div className='flex flex-col items-center leading-[1] bg-[#2c2c2c] p-1'><p className='text-2xl'>16</p><span className='text-sm font-[300]'>Mins</span></div>
    </div>
  )
}

export default Countdown