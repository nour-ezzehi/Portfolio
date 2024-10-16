import React from 'react'
import { TypewriterEffect } from './ui/TypewriterEffect';
import { Button } from './ui/MovingBorder';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Contact = () => {
  const links = [
    { title: "Connect on Github", url: "https://github.com/nour-ezzehi", icon: <FaGithub /> },
    { title: "Connect on Facebook", url: "https://www.facebook.com/nour.zehi.18", icon: <FaFacebook /> },
    { title: "Connect on LinkedIn", url: "https://www.linkedin.com/in/nour-ezzehi-2a9949243/", icon: <FaLinkedin /> },
    { title: "ezzehinour2002@gmail.com", url: "mailto:ezzehinour2002@gmail.com", icon: <FaEnvelope /> }
  ];

  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "Collaborate?"
    },
    {
      text: "Let’s",
    },
    {
      text: "Bring"
    },
    {
      text: "Your",
    },
    {
      text: "Next",
    },
    {
      text: "Project",
      className: "text-purple-500 dark:text-blue-500",
    },
    {
      text: "to",
    },
    {
      text: "Life!",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] space-y-4 m-2">
      <div className='lg:mb-12 mb-6'><TypewriterEffect words={words} /></div>
      <div className=" mx-auto lg:px-8">
        {/* Single column grid layout for all screen sizes */}
        <div className="grid grid-cols-1 gap-1">
          {links.map((link, idx) => (
            <Button
            key={idx}
            as="a"
            href={link.url} // Use link.url for button's href
            target={link.url.startsWith("mailto:") ? "_self" : "_blank"} // Open email client in same tab
            rel="noopener noreferrer"
            borderRadius="1.75rem"
            className={cn(
              // Apply different styles for odd and even buttons
              idx % 2 === 0
                ? "bg-blue-300 text-white font-bold max-lg:text-sm text-xl"
                : "bg-white dark:bg-slate-900 text-blue-300 font-bold text-xl max-lg:text-sm dark:text-white",
              "lg:tracking-wide max-lg:tracking-tight font-medium border-neutral-200 dark:border-slate-800" // Common styles
            )} // Added w-full to ensure full width
            >
              <div className='flex flex-row space-x-2'>
                <span className='flex width={4px} height={4px} mt-1'>{link.icon}</span>
                <span className='flex'>{link.title}</span> {/* Display the title */}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
