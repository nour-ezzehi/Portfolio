import { NavbarDemo } from '@/components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Services from '../components/Services'

const Home = () => {
  return (
    <main className='relative text-xl text-font bg-bd
    flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5'>
      <div>
        <NavbarDemo />
      </div>
      <div id="hero" className=''>
        <Hero />
      </div>
      <div id="about" className='mb-12'>
        <AboutMe />
      </div>
      <div id="skills" className='mt-40 mb-32'>
        <Skills/>
      </div>
      <div>
        <Services />
      </div>
      <div id="contact" className='mt-48  bg-white w-full'>
        <Contact />
      </div>
    </main>
  )
}

export default Home
