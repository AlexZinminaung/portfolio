import { IoIosArrowRoundUp } from "react-icons/io";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                <div className='project-item flex-1 flex flex-col gap-4 p-6 bg-gray-950 relative group'>
                    <span className='h-px bg-green-400 absolute top-0 left-0 w-0 group-hover:w-full transition-all duration-300'></span>
                    <span className='text-green-400 text-xs'>FULL STACK - REAL-TIME</span>
                    <h2 className='text-white font-bowlby'>NodeChat</h2>
                    <p className='text-gray-400 text-xs'>Multi-user real-time chat 1-to-1 private messaging.Persistent messages with PostgreSQL.</p>
                    {/* stacks */}
                    <div className='text-gray-400 text-xs flex sm:flex-nowrap flex-wrap gap-2'>
                        <span className='p-2 border border-gray-800'>Socket.io</span>
                        <span className='p-2 border border-gray-800'>React</span>
                        <span className='p-2 border border-gray-800'>Tailwind</span>
                        <span className='p-2 border border-gray-800'>Express</span>
                    </div>

                    {/* live demo link */}
                    <a href="https://nodechat-peach.vercel.app/" target="_blank" className='text-gray-400  text-xs flex gap-2 hover:text-green-400'>
                    <span>LIVE DEMO</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                    </a>
                </div>

                {/* Projects Box */}
                <div className='project-item flex-1 flex flex-col gap-4 p-6 bg-gray-950 relative group'>
                    <span className='h-px bg-green-400 absolute top-0 left-0 w-0 group-hover:w-full transition-all duration-300'></span>
                    <span className='text-green-400 text-xs'>FULL STACK - REAL-TIME</span>
                    <h2 className='text-white font-bowlby'>Chat App</h2>
                    <p className='text-gray-400 text-xs'>Real-time chat with group rooms messaging.Persistent messages with PostgreSQL.</p>
                    {/* stacks */}
                    <div className='text-gray-400 text-xs flex sm:flex-nowrap flex-wrap gap-2'>
                        <span className='p-2 border border-gray-800'>Socket.io</span>
                        <span className='p-2 border border-gray-800'>React</span>
                        <span className='p-2 border border-gray-800'>Tailwind</span>
                        <span className='p-2 border border-gray-800'>Express</span>
                    </div>

                    {/* live demo link */}
                    <a href="https://my-chat-app-fullstack.vercel.app/" target="_blank" className='text-gray-400  text-xs flex gap-2 hover:text-green-400'>
                    <span>LIVE DEMO</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                    </a>
                </div>

                {/* Projects Box */}
                <div className='project-item flex-1 flex flex-col gap-4 p-6 bg-gray-950 relative group'>
                    <span className='h-px bg-green-400 absolute top-0 left-0 w-0 group-hover:w-full transition-all duration-300'></span>
                    <span className='text-green-400 text-xs'>Frontend · API</span>
                    <h2 className='text-white font-bowlby'>TMDB Clone</h2>
                    <p className='text-gray-400 text-xs'>Movie browsing app cloning The Movie Database. Search, filter, and explore movies with a polished, dynamic UI.</p>
                    {/* stacks */}
                    <div className='text-gray-400 text-xs flex sm:flex-nowrap flex-wrap gap-2'>
                        <span className='p-2 border border-gray-800'>React</span>
                        <span className='p-2 border border-gray-800'>React Router</span>
                        <span className='p-2 border border-gray-800'>Tailwind</span>
                        <span className='p-2 border border-gray-800'>API</span>
                    </div>

                    {/* live demo link */}
                    <a href="https://tmdb-clone-by-zin.netlify.app/" target="_blank" className='text-gray-400  text-xs flex gap-2 hover:text-green-400'>
                    <span>LIVE DEMO</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                    </a>
                </div>

                {/* Projects Box */}
                <div className='project-item flex-1 flex flex-col gap-4 p-6 bg-gray-950 relative group'>
                    <span className='h-px bg-green-400 absolute top-0 left-0 w-0 group-hover:w-full transition-all duration-300'></span>
                    <span className='text-green-400 text-xs'>Full-Stack · Design</span>
                    <h2 className='text-white font-bowlby'>Interi</h2>
                    <p className='text-gray-400 text-xs'>Interior design web application with a modern interface. Built as a full-stack project with a focus on UX and responsiveness.</p>
                    {/* stacks */}
                    <div className='text-gray-400 text-xs flex sm:flex-nowrap flex-wrap gap-2'>
                        <span className='p-2 border border-gray-800'>React</span>
                        <span className='p-2 border border-gray-800'>Tailwind</span>
                        <span className='p-2 border border-gray-800'>Postgresql</span>
                        <span className='p-2 border border-gray-800'>Express</span>
                    </div>

                    {/* live demo link */}
                    <a href="https://interi.vercel.app/" target="_blank" className='text-gray-400  text-xs flex gap-2 hover:text-green-400'>
                    <span>LIVE DEMO</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                    </a>
                </div>

                {/* Projects Box */}
                <div className='project-item flex-1 flex flex-col gap-4 p-6 bg-gray-950 relative group'>
                    <span className='h-px bg-green-400 absolute top-0 left-0 w-0 group-hover:w-full transition-all duration-300'></span>
                    <span className='text-green-400 text-xs'>Game · Frontend</span>
                    <h2 className='text-white font-bowlby'>Space Shooter</h2>
                    <p className='text-gray-400 text-xs'>Browser-based 2D space shooter game built with Phaser.js. Playable directly in the browser — no install needed.</p>
                    {/* stacks */}
                    <div className='text-gray-400 text-xs flex sm:flex-nowrap flex-wrap gap-2'>
                        <span className='p-2 border border-gray-800'>Phaser</span>
                        <span className='p-2 border border-gray-800'>Custom Css</span>
                        <span className='p-2 border border-gray-800'>Vite</span>
                    </div>

                    {/* live demo link */}
                    <a href="https://spaceshooteralex.netlify.app/" target="_blank" className='text-gray-400  text-xs flex gap-2 hover:text-green-400'>
                    <span>LIVE DEMO</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project;