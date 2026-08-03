function Project({ children, ...props }) { 
  return (
    <>
      <div className="flex gap-4">
        <div className="bg-red-100 flex flex-col justify-center items-center ">
          <p className="text-[clamp(0.75rem,2vw,1rem)] font-semibold">{children}</p>
          <p className="text-sm">{props.description}</p>
        </div>

        <div className="flex justify-center items-center ">
          <div className="drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"> {props.image}</div>
        </div>

      </div>
    </>
  )
}

export default Project;