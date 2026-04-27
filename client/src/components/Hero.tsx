import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.hero-item', {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, {scope: container})


    return (
        <section
            ref={container}
            className='text-white min-h-screen flex flex-col justify-center items-start gap-8 py-32 px-8 md:px-12'
        >
            <p className='hero-item text-green-400 '>Full-Stack Developer — Based in Thailand</p>
            <h1 className='hero-item text-6xl sm:text-8xl font-bowlby'>I build things <br/> for the <span className='text-green-400'>web.</span></h1>
            <p className='hero-item text-gray-400'>React, Node, PostgreSQL, real-time apps. I write clean code and ship real projects — not just tutorials.</p>

            {/* buttons */}
            <div className='flex gap-2'>
                <a href="#projects" className='hero-item border border-green-400 text-green-400 hover:bg-green-400 hover:text-black p-4'>VIEW PROJECTS</a>
                <a href="#contact" className='hero-item border border-gray-600 text-gray-600 hover:border-white hover:text-white  p-4'>GET IN TOUCH</a>
            </div>
        </section>
    )
}

export default Hero;