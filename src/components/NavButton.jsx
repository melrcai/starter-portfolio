function NavButton({ children }) {
  return (
    <>
      <div className="flex justify-center items-center rounded-full h-8 w-18 bg-gray-300 hover:bg-gray-400">
        {children}
      </div>  
    </>
  )
}

export default NavButton;