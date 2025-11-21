import React from 'react'
import { Button } from './ui/button';

function Header() {
  return (
    <div className='flex flex-col items-center gap-4 py-30 text-white'>
        <div className='flex flex-col items-center'>
        <h1 className=" font-bold text-center text-6xl px-5 pb-5 ">
          Business 🚀 Skyrocketing <br />
with Digital Marketing
        </h1>

        <p className="text-center max-w-150 px-10 opacity-70">Digimar internet Marketing Agency is a full-service digital marketing agency. Attract, impress, and Convert more leads online and get results with Digimar.</p>


      </div>

      <div className='flex gap-2'>
        <Button variant="default" size="lg">Registration</Button>
        <Button variant="outline" size="lg">See How It Works</Button>
      </div>
    </div>
  )
}

export default Header