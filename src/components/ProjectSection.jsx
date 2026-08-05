import Project from './Project'
import StudentRecord from '../assets/StudentRecord.gif'
import GdgPomodoro from '../assets/GdgPomodoro.gif'
import DungeonCrawler from '../assets/DungeonCrawler.gif'

function ProjectSection () {
  return (
    <>
        <div>
          <p className="border mx-auto text-center font-semibold p-2 mt-6">Projects</p>

          <div className="flex mx-auto md:grid md:grid-cols-3 md:items-center justify-items-center flex-col items-center p-4 gap-4 mt-12">

            <Project description="Tech Stack: C" image={<img src={StudentRecord} alt="Student Record" 
            className="w-full h-[8rem] xs:w-80 xs:h-58 object-contain block rounded-lg" />}>
             Student Record </Project>

            <Project description="Tech Stack: HTML5, CSS3, JavaScript" image={<img src={GdgPomodoro} alt="GDG Pomodoro" 
            className="w-[11rem] xs:w-80 md:w-64 md:h-58 object-cover block rounded" />}>
             Pomodoro Timer </Project>

            <Project description="Tech Stack: C++" image={<img src={DungeonCrawler} alt="Dungeon Crawler" 
            className="w-[11rem] h-[4rem] xs:w-80 xs:h-28 object-contain rounded-lg" />}>
             Dungeon Crawler </Project>

          </div>
        </div> 
    </>
  )
}

export default ProjectSection;