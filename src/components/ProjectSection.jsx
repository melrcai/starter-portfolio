import Project from './Project'
import StudentRecord from '../assets/StudentRecord.gif'
import GdgPomodoro from '../assets/GdgPomodoro.gif'
import DungeonCrawler from '../assets/DungeonCrawler.gif'

function ProjectSection () {
  return (
    <section id="projects" className="pt-8 pb-4">
    <div className="relative w-full h-full flex mx-auto md:grid md:grid-cols-3 md:items-center justify-items-center flex-col items-center p-4 gap-4 mt-12">

      <Project 
        description="Tech Stack: C" 
        image={
          <div className="relative group w-full xs:w-80 h-32 xs:h-58 overflow-hidden rounded-lg">
            <img 
              src={StudentRecord} 
              alt="Student Record" 
              className="w-full h-full object-contain block" 
            />

            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Source Code</span>
            </div>
          </div>
        } 
      >
        Student Record 
      </Project>

      <Project 
        description="Tech Stack: HTML5, CSS3, JavaScript" 
        image={
          <div className="relative group w-44 xs:w-80 md:w-64 h-58 overflow-hidden rounded">
            <img 
              src={GdgPomodoro} 
              alt="GDG Pomodoro" 
              className="w-full h-full object-cover block" 
            />

            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Source Code</span>
            </div>
          </div>
        } 
      >
        Pomodoro Timer 
      </Project>


      <Project 
        description="Tech Stack: C++" 
        image={
          <div className="relative group w-44 xs:w-80 h-16 xs:h-28 overflow-hidden rounded-lg">
            <img 
              src={DungeonCrawler} 
              alt="Dungeon Crawler" 
              className="w-full h-full object-contain block" 
            />

            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Source Code</span>
            </div>
          </div>
        } 
      >
        Dungeon Crawler 
      </Project>

    </div>
    </section>
  )
}

export default ProjectSection;