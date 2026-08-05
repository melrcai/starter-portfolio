import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import ProjectSection from './components/ProjectSection'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div className="min-h-screen w-full bg-gray-400">

      <Header/>
      <About/>
      <ProjectSection/>

        <div className="p-2 mx-auto text-center sm:text-left text-l max-w-md font-semibold flex justify-center items-center mt-6">
          <p className="text-sm">At my stage, I'm still exploring, experimenting, 
            and struggling through every project. I believe it's worth losing my mind over rather
            than being trapped in a prison of comfort. XD
          </p>
        </div>

        <hr className="mx-auto max-w-md mt-2 border-1 border-black" />

      <Contact/>
    
    </div>
    </>
  )
}

export default App
