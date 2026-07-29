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

      <div className="border grid grid-cols-2 gap-4 h-12 text-l font-semibold">

        <div className="flex justify-center border items-center">
          <button className="rounded-full h-8 w-50 hover:bg-gray-300">Home</button>
        </div>

        <div className="border bg-red-100 flex items-center gap-4 sm:gap-14">
          <NavButton>About</NavButton>
          <NavButton>Projects</NavButton>
          <NavButton>Contact</NavButton> 
        </div>

      </div>


      <div className="flex mx-auto  justify-center items-center bg-yellow-100 h-45 flex-row items-center justify-center gap-4">
        <div className="md:shrink-0">
          <img className="object-cover block h-32 min-w-[8rem] w-32 rounded-full " src={mel} alt="MM" />
        </div>
        <div className="bg-red-100 justify-center items-center ">
          <p className="text-xl font-semibold">Melissa D. Marcaida</p>
          <p className="text-sm">Aspiring Software Engineer</p>
          <p className="text-xs">Currently a 2nd year student at Polytechnic University of the Philippines</p>
        </div>
      </div>


        <div className="mx-auto text-center bg-red-200 text-l font-semibold flex justify-center items-center">
          <p className="text-xs ">A self taught ambitious b*tch with a passion in software development. Still a NOOB in everything yet exploring C++, Javascript, and React.</p>
        </div>

        <div>
          <p className="bg-orange-200 mx-auto text-center font-semibold p-2 mt-6">Projects</p>

          <div className="flex mx-auto justify-center items-center bg-yellow-100 flex-col items-center justify-center gap-4">

            <Project description="Description of Project 1" image="Image 1">Project 1</Project>
            <Project description="Description of Project 2" image="Image 2">Project 2</Project>
            <Project description="Description of Project 3" image="Image 3">Project 3</Project>

          </div>
        </div>

        <div className="mx-auto text-center sm:text-left text-l max-w-md font-semibold flex justify-center items-center mt-6">
          <p className="bg-blue-200 text-sm">At my stage, I'm still exploring, experimenting, 
            and struggling through every project. I believe it's worth losing my mind over rather
            than being trapped in a prison of comfort. XD
          </p>
        </div>

        <hr className="mx-auto max-w-md mt-2 border-1 border-black" />

        <div className="mx-auto text-center justify-center items-center max-w-md flex justify-center items-center mt-2">
          <p className="bg-green-200 text-l font-semibold mx-auto">Have a project in mind? Let's connect!</p>
        </div>

        <div className="mx-auto max-w-md bg-red-200 flex justify-center items-center flex-row gap-6 items-center mt-4">
          <div className="w-12 h-12 rounded-full flex justify-center items-center ">
            <TiSocialFacebookCircular className="text-6xl" />
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center ">
            <IoLogoInstagram className="text-6xl" />
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center ">
            <FaLinkedin className="text-4xl" />
          </div>
        </div>
    
    </div>
    </>
  )
}

export default App
