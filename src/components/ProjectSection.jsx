import Project from './Project'
import StudentRecord from '../assets/StudentRecord.gif'
import GdgPomodoro from '../assets/GdgPomodoro.gif'
import DungeonCrawler from '../assets/DungeonCrawler.gif'

function ProjectSection () {
  const sourceCodes = [
    {
      href: 'https://github.com/melrcai/student-record-noob',
    },
    {
      href: 'https://github.com/melrcai/gdg-pomodoro',
    },
    {
      href: 'https://github.com/melrcai/dungeon-crawler',
    },
  ]

  const handleSourceCodeClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

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

              <button
                type="button"
                onClick={() => handleSourceCodeClick(sourceCodes[0].href)}
                className="absolute bottom-0 left-0 right-0 h-1/5 bg-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:bg-gray-700/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Source Code
              </button>
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

              <button
                type="button"
                onClick={() => handleSourceCodeClick(sourceCodes[1].href)}
                className="absolute bottom-0 left-0 right-0 h-1/5 bg-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:bg-gray-700/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Source Code
              </button>
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

              <button
                type="button"
                onClick={() => handleSourceCodeClick(sourceCodes[2].href)}
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-gray-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:bg-gray-700/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Source Code
              </button>
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