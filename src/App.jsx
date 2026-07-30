import { useState } from 'react'
import './App.css'
import NavButton from './components/NavButton'
import Project from './components/Project'
import mel from './assets/mel.jpg'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
    <div className="bg-gray-400 min-h-screen w-full min-w-screen">

      <div className="border grid grid-cols-2 gap-4 h-12 text-l font-semibold p-2">

        <div className="flex justify-center items-center">
          <button className="rounded-full h-8 w-50 hover:bg-gray-300 active:bg-gray-500 
          transition-colors duration-300 shadow-md hover:shadow-lg active:shadow-sm">Home</button>
        </div>

        <div className="flex items-center gap-4 sm:gap-14">
          <NavButton>About</NavButton>
          <NavButton>Projects</NavButton>
          <NavButton>Contact</NavButton> 
        </div>

      </div>


      <div className="flex mx-auto  justify-center items-center h-45 flex-row items-center justify-center gap-4">
        <div className="md:shrink-0 overflow-hidden rounded-full">
          <img className="object-cover block h-32 min-w-[8rem] w-32 rounded-full shadow-lg
          transition-transform duration-500 ease-in-out hover:scale-110" src={mel} alt="MM" />
        </div>
        <div className=" justify-center items-center ">
          <p className="text-xl font-semibold">Melissa D. Marcaida</p>
          <p className="text-sm">Aspiring Software Engineer</p>
          <p className="text-xs">Currently a 2nd year student at Polytechnic University of the Philippines</p>
        </div>
      </div>


        <div className="mx-auto text-center text-l font-semibold flex justify-center items-center">
          <p className="text-xs ">A self taught ambitious b*tch with a passion in software development. Still a NOOB in everything yet exploring C++, Javascript, and React.</p>
        </div>

        <div>
          <p className="border mx-auto text-center font-semibold p-2 mt-6">Projects</p>

          <div className="flex mx-auto justify-center items-center flex-col items-center justify-center gap-4 mt-4">

            <Project description="Description of Project 1" image="Image 1">Project 1</Project>
            <Project description="Description of Project 2" image="Image 2">Project 2</Project>
            <Project description="Description of Project 3" image="Image 3">Project 3</Project>

          </div>
        </div>

        <div className="mx-auto text-center sm:text-left text-l max-w-md font-semibold flex justify-center items-center mt-6">
          <p className="text-sm">At my stage, I'm still exploring, experimenting, 
            and struggling through every project. I believe it's worth losing my mind over rather
            than being trapped in a prison of comfort. XD
          </p>
        </div>

        <hr className="mx-auto max-w-md mt-2 border-1 border-black" />

        <div className="mx-auto text-center justify-center items-center max-w-md flex justify-center items-center mt-2">
          <p className=" text-l font-semibold mx-auto">Have a project in mind? Let's connect!</p>
        </div>

        <div className="mx-auto max-w-md flex justify-center items-center flex-row gap-6 items-center mt-4">
          <div className="hover:bg-gray-500/30 w-12 h-12 rounded-full flex justify-center items-center ">
            <TiSocialFacebookCircular className="text-6xl" />
          </div>
          <div className="hover:bg-gray-500/30 w-12 h-12 rounded-full flex justify-center items-center ">
            <IoLogoInstagram className="text-6xl" />
          </div>
          <div className="hover:bg-gray-500/30 w-12 h-12 rounded-full flex justify-center items-center ">
            <FaLinkedin className="text-4xl" />
          </div>
        </div>
    
    </div>
    </>
  )
}

export default App
