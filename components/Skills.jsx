"use client"
import React from 'react'
import  HoverEffect from './ui/CardHoverEffect'
import { MovingBorderDemo } from './ui/MovingBorderDemo'

const Skills = () => {
  return (
    <>
      <h1 className='text-center text-3xl text-font font-bold mb-10 mt-6'>Skills</h1>
      <div className=" mx-auto px-2">
        <HoverEffect items={skills}/>
      </div>
    </>
  )
}
const skills = [
  {
    title: "Data & ML",
    skills: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Matplotlib", "Seaborn", "Pytorch", "Pandas", "Numpy", "OpenCV"],
  },
  {
    title: "Software Development",
    skills: ["Git & GitHub", "Docker", "CI/CD", "Scrum", "Java", "C++", "C", "Arduino", "Go", "AWS", "Linux"],
  },
  {
    title: "Web Development",
    skills: ["Node.js", "Express.js", "Rest APIs", "React", "Next.js", "Django", "Nest.js", "Angular", "Symphony", "Vue.js"],
  },
];


export default Skills
