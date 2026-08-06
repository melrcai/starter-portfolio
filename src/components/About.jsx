import mel from '../assets/mel.jpg'

function About () {
  return (
    <section id="about">
      <div className="flex mx-auto p-4 justify-center items-center h-45 flex-row gap-4">
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
    </section>
  )
}

export default About;