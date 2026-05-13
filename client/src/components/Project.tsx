import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from '../data/projectData';
import ProjectBox from "./ProjectBox";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {

    const container = useRef(null);
    
    useGSAP(() => {
        gsap.from('.project-item', {
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, {scope: container})
    return (
        <section id="projects" ref={container} className='py-32 px-8 md:px-12 flex flex-col gap-12'>

            {/* header */}
            <h1 className='project-item flex justify-start items-center gap-4'>
                <span className='text-green-400'>01</span> 
                <span className='text-white text-4xl sm:text-6xl font-bowlby'>Projects</span>
                <span className='w-full h-px bg-gray-800'></span>
            </h1>

            {/* project box container */}
            <div className='flex flex-wrap justify-start gap-1'>
                {/* Projects Box */}
                {
                    Projects.map( (project, index) => {
                        return (
                            <ProjectBox key={index} data={project}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project;