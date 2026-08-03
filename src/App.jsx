import { useState } from 'react'
import './App.css'
import NavButton from './components/NavButton'
import Project from './components/Project'
import mel from './assets/mel.jpg'
import StudentRecord from './assets/StudentRecord.gif'
import GdgPomodoro from './assets/GdgPomodoro.gif'
import DungeonCrawler from './assets/DungeonCrawler.gif'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
    <div className="min-h-screen w-full bg-gray-400">

      <div className="border grid grid-cols-2 gap-4 h-12 text-l font-semibold p-2">

        <div className="flex justify-center items-center">
          <button className="rounded-full h-8 w-50 hover:bg-gray-300 active:bg-gray-500 
           transition-colors duration-300 shadow-md hover:shadow-lg active:shadow-sm 
           focus:outline-2 focus:outline-offset-2 focus:outline-gray-300">Home</button>
        </div>

        <div className="flex items-center gap-4 sm:gap-14">
          <NavButton>About</NavButton>
          <NavButton>Projects</NavButton>
          <NavButton>Contact</NavButton> 
        </div>

      </div>


      <div className="flex mx-auto p-4 justify-center items-center h-45 flex-row items-center justify-center gap-4">
        <div className="md:shrink-0 overflow-hidden rounded-full">
          <img className=" w-32 h-[6rem] xs:h-32 object-cover block rounded md:rounded-full shadow-lg
          transition-transform duration-500 ease-in-out hover:scale-110" src={mel} alt="MM" />
        </div>
        <div className=" justify-center items-center ">
          <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-semibold">Melissa D. Marcaida</p>
          <p className="text-[clamp(0.75rem,2.5vw,1rem)]">Aspiring Software Engineer</p>
          <p className="text-[clamp(0.25rem,2.5vw,0.75rem)]">Currently a 2nd year student at Polytechnic University of the Philippines</p>
        </div>
      </div>


        <div className="mx-auto text-center p-2 font-semibold flex justify-center items-center">
          <p className="text-[clamp(0.75rem,2vw,1rem)] ">A self taught ambitious b*tch with a passion in software development. Still a NOOB in everything yet exploring C++, Javascript, and React.</p>
        </div>

        <div>
          <p className="border mx-auto text-center font-semibold p-2 mt-6">Projects</p>

          <div className="flex mx-auto md:flex-row justify-center items-center flex-col items-center justify-center gap-4 mt-12">

            <Project description="Des" image={<img src={StudentRecord} alt="Student Record" 
            className="w-full h-[8rem] xs:w-80 xs:h-58 object-contain block rounded-lg" />}>
             Student Record </Project>

            <Project description="Des" image={<img src={GdgPomodoro} alt="GDG Pomodoro" 
            className="w-[11rem] xs:w-80 md:w-64 md:h-58 object-cover block rounded" />}>
             Pomodoro Timer </Project>

            <Project description="Des" image={<img src={DungeonCrawler} alt="Dungeon Crawler" 
            className="w-[11rem] h-[4rem] xs:w-80 xs:h-28 object-contain rounded-lg" />}>
             Dungeon Crawler </Project>

          </div>
        </div>

        <div className="p-2 mx-auto text-center sm:text-left text-l max-w-md font-semibold flex justify-center items-center mt-6">
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
          <div className="hover:bg-gray-500/30 active:bg-gray-500/50 duration-300 w-12 h-12 rounded-full flex justify-center items-center ">
            <TiSocialFacebookCircular className="text-6xl" />
          </div>
          <div className="hover:bg-gray-500/30 active:bg-gray-500/50 duration-300 w-12 h-12 rounded-full flex justify-center items-center ">
            <IoLogoInstagram className="text-6xl" />
          </div>
          <div className="hover:bg-gray-500/30 active:bg-gray-500/50 duration-300 w-12 h-12 rounded-full flex justify-center items-center ">
            <FaLinkedin className="text-4xl" />
          </div>
        </div>
    
    </div>
    </>
  )
}

export default App
