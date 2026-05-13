import type { SkillGroup } from "../types/skillType"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
    data: SkillGroup,
}

type SkillbarProps = {
  name: string;
  level: number;
};


const Skillbar = ({ name, level }: SkillbarProps) => {
    const barRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            barRef.current,
            { width: 0, opacity: 0},
            {   width: `${level}%`,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: barRef.current,
                    start: "top 85%",
                    },
            })
    })

    return (
       <li className="flex flex-col min-w-56 gap-2 justify-center">
            <div className='flex gap-2 items-center'>
                <span className="block h-2 aspect-square bg-green-400"></span><span>{name}</span>
            </div>
            <div className=' relative'>
                <div className='w-full h-1 bg-gray-800 absolute'></div>
                <div ref={barRef} className={`skill-bar h-1 bg-green-400 absolute z-10`}></div>
                <span></span>
            </div>
        </li>
       )
}


const SkillBox = ({data}: Props) => {

    return (
        <div className="skill-item flex-1 flex flex-col gap-8 p-5 bg-gray-950">
            <h3 className="text-green-400 text-xs">{data.role}</h3>
            <ul className="text-white text-xs flex flex-col gap-2">
            {
                data.skills.map( (skill, index) => {
                    return (<Skillbar key={index} name={skill.name} level={skill.level}/>)
                })
            }         
            </ul>
        </div>
    )
}

export default SkillBox