function NavButton({ children, to }) {
  const handleClick = () => {
    if (!to) return;
    const el = document.getElementById(to);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.hash = `#${to}`;
  };

  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center text-[clamp(0.75rem,2.5vw,1rem)] rounded-full h-8 px-4 shrink min-w-0 whitespace-nowrap bg-gray-300 hover:bg-gray-500 active:bg-gray-600 transition-colors duration-300 shadow-md hover:shadow-lg active:shadow-sm"
      type="button"
    >
      {children}
    </button>
  );
}

export default NavButton;