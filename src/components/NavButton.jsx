function NavButton({ children }) {
  return (
    <>
      <div className="flex justify-center items-center rounded-full h-8 px-4 shrink min-w-0 whitespace-nowrap bg-gray-300 hover:bg-gray-500">
        {children}
      </div>  
    </>
  )
}

export default NavButton;