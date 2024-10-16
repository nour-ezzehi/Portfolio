import React from 'react'
import { CoverDemo } from './CoverDemo'
import Image from 'next/image'


const AboutMeResponsive = () => {
  return (
    <div className='lg:hidden flex flex-col items-center shadow-xl shadow-purple-500 p-4 -mt-4'>
      <h1 className='text-center text-2xl text-font font-bold mb-10'>About Me</h1>
      <div className='flex flex-col space-y-6 items-center'>
        <Image
          src="/nourry.jpg" // Adjust the path accordingly
          alt="A beautiful scenery"
          width={250}
          height={150}
          className='rounded-lg mb-28' // Add margin bottom for spacing
        />
        <CoverDemo />
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div>
    <div className='shadow-xl shadow-purple-500 p-4 hidden lg:block'>
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
      <AboutMeResponsive />
    </div>
  )
}

export default AboutMe

