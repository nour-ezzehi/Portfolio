import { NavbarDemo } from '@/components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main className='relative text-xl text-font bg-bd
    flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5'>
      <div>
        <NavbarDemo />
      </div>
      <div className=''>
        <Hero />
      </div>
      <div className='mb-12'>
        <AboutMe />
      </div>
      <div className='mt-48'>
        <Skills />
      </div>
      <div className='mt-48  bg-white w-full'>
        <Contact />
      </div>
    </main>
  )
}

export default Home
