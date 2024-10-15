import React from 'react'
import { CoverDemo } from './CoverDemo'

const AboutMe = () => {
  return (
    <div className='shadow-xl shadow-purple-500 p-4'>
      <h1 className='text-center text-3xl text-font font-bold mb-2 mt-6'>About Me</h1>
      <div className='flex justify-center items-center flex-row'>
        <div className='basis-2/6'></div>
        <div className='basis-4/6'>
          <CoverDemo />
        </div>
      </div>
    </div>
  )
}

export default AboutMe

