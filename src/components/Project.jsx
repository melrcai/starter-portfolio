function Project({ children, ...props }) { 
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[clamp(1rem,2vw,1rem)] font-semibold">{children}</p>
          <p className="w-40 md:w-full flex flex-col text-center md:flex-row text-[clamp(0.75rem,2vw,1rem)] md:text-[clamp(1rem,2vw,1rem)] justify-center items-center">{props.description}</p>
        </div>

        <div className="flex justify-center items-center ">
          <div className="drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"> {props.image}</div>
        </div>

      </div>
    </>
  )
}

export default Project;