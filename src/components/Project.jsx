function Project({ children, ...props }) { 
  return (
    <>
      <div className="border flex gap-4">
        <div className="bg-red-100 flex flex-col justify-center items-center ">
          <p className="text-xl font-semibold">{children}</p>
          <p className="text-sm">{props.description}</p>
        </div>

        <div className=" bg-red-100 flex justify-center items-center ">
          <p className="text-xl font-semibold">{props.image}</p>
        </div>

      </div>
    </>
  )
}

export default Project;