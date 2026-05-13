import { useState, useContext } from "react";
import { CursorContext } from '../contexts/cursorContex'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [isDropdown, setDropdown] = useState(false);
    // use context
    const cursorContext = useContext(CursorContext);
    if (!cursorContext) return;
    const { handleHoverOn, handleHoverOff } = cursorContext;

    return (
        <nav className='flex justify-between items-center border-b border-gray-800 fixed z-10 top-0 w-full backdrop-blur-2xl py-4 px-8 md:px-12'>
            <span className='text-green-400 text-3xl font-bowlby'>ZIN</span>
            <ul className='hidden text-gray-400 text-xs sm:flex gap-6'>
                <li className="hover:text-white"><a href="#projects" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>PROJECTS</a></li>
                <li className="hover:text-white"><a href="#skills" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>SKILLS</a></li>
                <li className="hover:text-white"><a href="#contact" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>CONTACT</a></li>
            </ul>

            {/* for mobile */}
            <button 
                onClick={() => { setDropdown( prev => !prev)}}
                className="text-gray-400 hover:text-white sm:hidden">
                <CiMenuFries className=" size-8"/>
            </button>

            <ul className={`${isDropdown ? 'flex' : 'hidden'} flex-col absolute z-10 bg-black left-0 top-full w-full text-gray-400 text-xs sm:hidden`}>
                <li>
                    <a href="#projects" className="hover:text-white block p-4" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} onClick={() => { setDropdown(false)}}>PROJECTS</a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-white block p-4" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} onClick={() => { setDropdown(false)}}>SKILLS</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-white block p-4" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} onClick={() => { setDropdown(false)}}>CONTACT</a>
                </li>
            </ul>
      </nav>
    )
}


export default Navbar;