import React from 'react'
import { CoverDemo } from './CoverDemo'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='shadow-xl shadow-purple-500 p-4'>
      <h1 className='text-center text-3xl text-font font-bold mt-6'>About Me</h1>
      <div className='flex justify-center items-center flex-row'>
        <div className='ml-12 mb-12 basis-2/6'>
          <Image
          src="/nourry.jpg" // Adjust the path accordingly
          alt="A beautiful scenery"
          width={250}
          height={150}
        />
        </div>
        <div className='basis-4/6'>
          <CoverDemo />
        </div>
      </div>
    </div>
  )
}

export default AboutMe

