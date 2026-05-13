import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skills from '../data/skillData';
import SkillBox from './SkillBox';

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
    const container = useRef(null);
    
    useGSAP(() => {
        gsap.from('.skill-item', {
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
        <section id="skills" ref={container} className=' py-32 px-8 md:px-12 flex flex-col gap-12'>

            {/* header */}
            <h1 className='skill-item flex justify-start items-center gap-4'>
                <span className=' text-green-400'>02</span> 
                <span className='text-white text-4xl sm:text-6xl font-bowlby'>Skills</span>
                <span className='w-full h-px bg-gray-800'></span>
            </h1>
            
            {/* skills box container */}
            <div className="flex flex-wrap gap-1">
            {
               Skills.map( (skill, index) => {
                return <SkillBox key={index} data={skill}/>
               }) 
            }

            </div>
        </section>
    );
}


export default Skill;