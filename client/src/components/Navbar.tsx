
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center border-b border-gray-800 fixed z-10 top-0 w-full backdrop-blur-2xl py-4 px-8 md:px-12'>
            <span className='text-green-400 text-3xl font-bowlby'>ZIN</span>
            <ul className='text-gray-400 text-xs flex gap-6'>
                <li className="hover:text-white"><a href="#projects">PROJECTS</a></li>
                <li className="hover:text-white"><a href="#skills">SKILLS</a></li>
                <li className="hover:text-white"><a href="#contact">CONTACT</a></li>
            </ul>
      </nav>
    )
}


export default Navbar;