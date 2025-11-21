import React from 'react'
import { Button } from './ui/button';

function Header() {
  return (
    <div className='flex flex-col items-center gap-4 py-20 text-white'>

      <div className='flex flex-col items-center gap-10'>

        <div className='flex flex-col items-center'>
        <h1 className=" font-bold text-center text-6xl px-5 pb-5">
          Business 🚀 Skyrocketing <br /> with Digital Marketing
        </h1>

        <p className="text-center max-w-150 px-10 opacity-80 pb-10">Digimar internet Marketing Agency is a full-service digital marketing agency. Attract, impress, and Convert more leads online and get results with Digimar.</p>

      </div>

      <div className='flex gap-2'>
        <Button variant="default" size="xl" className='text-primary-dark font-bold'>Registration</Button>
        <Button variant="outline" size="xl">See How It Works</Button>
      </div>

      </div>
      <div>

      <div className='py-20 bg-primary-low w-screen flex justify-center items-center'>
        <h1>IMAGE PLACE HOLDER</h1>
      </div>
      <div className='py-20 bg-primary-light w-screen flex justify-center items-center'>
        <h1>IMAGE PLACE HOLDER</h1>
      </div>
      </div>
    </div>
  )
}

export default Header