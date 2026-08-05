import NavButton from './NavButton'

function Header () {
return (
<>
      <div className="border grid grid-cols-2 gap-4 h-12 text-l font-semibold p-2">

        <div className="flex justify-center items-center">
          <button className="rounded-full h-8 w-50 hover:bg-gray-300 active:bg-gray-500 
           transition-colors duration-300 shadow-md hover:shadow-lg active:shadow-sm 
           focus:outline-2 focus:outline-offset-2 focus:outline-gray-300">Home</button>
        </div>

        <div className="flex items-center gap-4 sm:gap-14">
          <NavButton to="about">About</NavButton>
          <NavButton to="projects">Projects</NavButton>
          <NavButton to="contact">Contact</NavButton>
        </div>

      </div>
</>
  )
}

export default Header;