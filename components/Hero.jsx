import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision';
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ResponsiveSection = () => {
  return (
    <div className='flex flex-col p-4 space-y-2 lg:hidden mt-16'>
      <div className='flex flex-col space-y-2 text-center text-wrap'>
        <h1 className='font-bold text-font text-2xl text-center mb-4'>I am Nour Ezzehi</h1>
        <h2 className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text text-md">
          Web developer & machine learning engineer
        </h2>
        <TextGenerateEffect
          words="I bring a unique perspective to building functional and pleasing web solutions."
          className="text-center text-sm font-light"
        />
        <h3 className='text-md text-font font-light'>
          Currently <span className='text-sm pl-2 underline'>Open to Work</span>
        </h3>
      </div>
      <div className='flex flex-col items-center space-y-2'>
        <Link href="#contact">
          <button className="px-2 py-2 w-28 text-sm rounded-md bg-violet-500 text-white font-bold transition duration-200 hover:bg-white hover:text-font border-2 border-transparent hover:border-violet-500">
            Contact me
          </button>
        </Link>
        <div className='flex justify-center space-x-4'>
          <FaGithub className='text-2xl' />
          <FaLinkedin className='text-2xl' />
          <FaEnvelope className='text-2xl' />
          <FaFacebook className='text-2xl' />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className='lg:pt-28 lg:pb-4 pt-28 mt:20 max-lg:mb-40'>
        <div className='w-screen hidden lg:block'>
        <BackgroundBeamsWithCollision>
        <div className="flex lg:flex-row flex-col">
          <div className='lg:basis-1/2 p-6 lg:flex flex-col lg:space-y-2'>
            <h1 className='font-bold text-font lg:text-5xl'>I am Nour Ezzehi</h1>
            <h1 className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text lg:text-2xl text-lg">
              Web developer & machine learning engineer
            </h1>
            <TextGenerateEffect
            words="I bring a unique perspective to building functional
            and pleasing web solutions."
            className="text-center text-[26px] font-light whitespace-nowrap"
          />
          <h1 className='text-2xl text-font font-light'>Currently<span className='text-lg pl-2 underline'>Open to Work</span></h1>
          <div className='flex flex-col space-y-2'>
          <Link href="#contact">
            <button className="px-8 py-2 w-48 rounded-md bg-violet-500 text-white font-bold transition duration-200 hover:bg-white hover:text-font border-2 border-transparent hover:border-violet-500">
              Contact me
            </button>
          </Link>
          <div className='flex flex-row space-x-4 center pl-6'>
            <FaGithub className='text-2xl'/>
            <FaLinkedin className='text-2xl'/>
            <FaEnvelope className='text-2xl'/>
            <FaFacebook className='text-2xl'/>
          </div>
          </div>
          </div>
          <h2 className="text-2xl relative z-20 md:text-xl lg:text-xl font-bold text-center text-black max-lg:hidden dark:text-white font-sans tracking-tight basis-1/2">
            Transform your vision into reality{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            </div>
          </h2>
        </div>

    </BackgroundBeamsWithCollision>
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        </div>
        <ResponsiveSection />
      </div>
  )
}

export default Hero
