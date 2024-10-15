import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision';
import Link from 'next/link'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='pt-28 pb-4'>
      <div>
        <div className='w-screen'>
        <BackgroundBeamsWithCollision>
        <div className="flex flex-row">
          <div className='basis-1/2 p-6 flex flex-col space-y-2'>
            <h1 className='font-bold text-font text-5xl'>I am Nour Ezzehi</h1>
            <h1 className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text text-2xl">
              Web developer & machine learning engineer
            </h1>
            <TextGenerateEffect
            words="I bring a unique perspective to building functional
            and pleasing web solutions."
            className="text-center text-[20px] md:text-xl font-light lg:text-xl whitespace-nowrap"
          />
          <h1 className='text-2xl text-font font-light'>Currently<span className='text-lg pl-2 underline'>Open to Work</span></h1>
          <div className='flex flex-col space-y-2'>
          <Link href="#">
            <button className="px-8 py-2 w-48 rounded-md bg-violet-500 text-white font-bold transition duration-200 hover:bg-white hover:text-font border-2 border-transparent hover:border-violet-500">
              Contact me
            </button>
          </Link>
          <div className='flex flex-row space-x-4 center pl-14'>
            <FaGithub className='text-2xl'/>
            <FaLinkedin className='text-2xl'/>
          </div>
          </div>

          </div>
          <h2 className="text-2xl relative z-20 md:text-xl lg:text-xl font-bold text-center text-black dark:text-white font-sans tracking-tight basis-1/2">
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
      </div>
    </div>
  )
}

export default Hero
