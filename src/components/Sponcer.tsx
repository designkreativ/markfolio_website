import React from 'react'

export default function Sponcer() {

  const sponcerData = {
    title: "Our Clients",
    subtitle: "Trusted over 1500+ clients",
  }
  return (
    <div className='flex flex-col items-center py-20 bg-white'>
      <div className='flex flex-col items-center gap-4'>
        <p className='subheading text-primary-mid'>{sponcerData.title}</p>
        <h2 className='heading text-primary-dark'>{sponcerData.subtitle}</h2>

      </div>
      <div className='flex gap-20 justify-center flex-wrap mt-10'>
        <div className='w-40 h-20 bg-gray-300'></div>
        <div className='w-40 h-20 bg-gray-300'></div>
        <div className='w-40 h-20 bg-gray-300'></div>
        <div className='w-40 h-20 bg-gray-300'></div>
      </div>
    </div>
  )
}
