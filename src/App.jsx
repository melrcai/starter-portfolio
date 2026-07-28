import { useState } from 'react'
import './App.css'
import NavButton from './components/NavButton'
import mel from './assets/mel.jpg'

function App() {
  return (
    <>
    <div className="bg-gray-200 min-h-screen w-full min-w-screen">

      <div className="border grid grid-cols-2 gap-4 h-12 text-l font-semibold">

        <div className="flex justify-center border items-center">
          <button className="rounded-full h-8 w-50 hover:bg-gray-300">Home</button>
        </div>

        <div className="border bg-red-100 flex items-center gap-14">
          <NavButton>About</NavButton>
          <NavButton>Projects</NavButton>
          <NavButton>Contact</NavButton> 
        </div>

      </div>


      <div className="flex mx-auto justify-center items-center bg-yellow-100 h-45 flex-row items-center justify-center gap-4">
        <img className="object-cover block h-32 min-w-[8rem] w-32 rounded-full " src={mel} alt="MM" />
        <div className="bg-red-100 justify-center items-center ">
          <p className="text-xl font-semibold">Melissa D. Marcaida</p>
          <p className="text-sm">Aspiring Software Engineer</p>
          <p className="text-xs">Currently a 2nd year student at Polytechnic University of the Philippines</p>
        </div>
      </div>


        <div className="mx-auto bg-red-200 text-l max-w-md font-semibold flex justify-center items-center">
          <p className="text-xs ">A self taught ambitious b*tch with a passion in software development. Still a NOOB in everything yet exploring C++, Javascript, and React.</p>
        </div>

        <div>
          <p className="bg-orange-200 mx-auto text-center font-semibold p-2 mt-6">Projects</p>

          <div className="flex mx-auto justify-center items-center bg-yellow-100 flex-col items-center justify-center gap-4">

            <div className="border flex gap-4">
              <div className="bg-red-100 flex flex-col w-64 h-30 justify-center items-center ">
                <p className="text-xl font-semibold">Project 1</p>
                <p className="text-sm">Description of Project 1</p>
              </div>

              <div className="bg-red-100 w-64 h-30 flex justify-center items-center ">
                <p className="text-xl font-semibold">Image 1</p>
              </div>

            </div>

            <div className="border flex gap-4">
              <div className="bg-red-100 flex flex-col w-64 h-30 justify-center items-center ">
                <p className="text-xl font-semibold">Project 1</p>
                <p className="text-sm">Description of Project 1</p>
              </div>

              <div className="bg-red-100 w-64 h-30 flex justify-center items-center ">
                <p className="text-xl font-semibold">Image 1</p>
              </div>

            </div>

            <div className="border flex gap-4">
              <div className="bg-red-100 flex flex-col w-64 h-30 justify-center items-center ">
                <p className="text-xl font-semibold">Project 1</p>
                <p className="text-sm">Description of Project 1</p>
              </div>

              <div className="bg-red-100 w-64 h-30 flex justify-center items-center ">
                <p className="text-xl font-semibold">Image 1</p>
              </div>

            </div>

          </div>
        </div>

    
    </div>
    </>
  )
}

export default App
