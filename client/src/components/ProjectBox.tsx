import { IoIosArrowRoundUp } from "react-icons/io";
import type { Project } from "../types/projectType";
import { useContext } from "react";
import { CursorContext } from '../contexts/cursorContex'

type Prop = {
    data: Project
}

const ProjectBox = ({ data }: Prop) => {
    // use context
    const cursorContext = useContext(CursorContext);
    if (!cursorContext) return;
    const { handleHoverOn, handleHoverOff } = cursorContext;

    return (
            <div className='min-w-56 project-item flex-1 flex flex-col gap-4 p-6 bg-gray-950 relative group'>
                <span className='h-px bg-green-400 absolute top-0 left-0 w-0 group-hover:w-full transition-all duration-300'></span>
                <div className="w-full h-full overflow-hidden">
                    <img className="object-cover " src={data.imgUrl}/>
                </div>
                <span className='text-green-400 text-xs'>{data.type}</span>
                <h2 className='text-white font-bowlby'>{data.title}</h2>
                <p className='text-gray-400 text-xs'>{data.description}</p>
                {/* stacks */}
                <div className='text-gray-400 text-xs flex flex-wrap gap-2'>
                    {
                    data.stack.map( (item, index) => {
                        return <span key={index} className='p-2 border border-gray-800'>{item}</span> 
                    })
                    }
                </div>

                {/* live demo link */}
                <a href={data.link} target="_blank" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} className='text-gray-400  text-xs flex gap-2 hover:text-green-400'>
                <span>LIVE DEMO</span>
                <IoIosArrowRoundUp className='size-4 rotate-45'/>
                </a>
            </div>
    );
}

export default ProjectBox