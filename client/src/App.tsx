import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useRef, useContext } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CursorContext } from './contexts/cursorContex';

function App() {
  // use context

  const cursorContext = useContext(CursorContext);
  if (!cursorContext) return;
  const { onHover } = cursorContext;

  const container = useRef(null);
  useGSAP(() => {
    const cursor = document.querySelector("#cursor");
    const circle = document.querySelector("#circle"); 

    // set once
    gsap.set([cursor, circle], {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.to(circle, {
      scale: onHover ? 2 : 1,
      duration: 0.3,
      ease: "power2.out",
    });

    const xTo = gsap.quickTo(circle, "x", { duration: 0.2 });
    const yTo = gsap.quickTo(circle, "y", { duration: 0.2 });
    
    const moveCursor = (e: MouseEvent) => {
      // instant cursor
      gsap.set(cursor, {
        x: e.clientX,
        y: e.clientY,
      });

      // smooth follower
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      
    }}, { scope: container,  dependencies: [onHover] });

  return (
    <main ref={container} className='bg-black min-h-screen cursor-none'>
      <div id='cursor' className={` fixed z-50 block size-3 rounded-full bg-green-400 pointer-events-none`}></div>
      <div id='circle' className={` fixed z-50 block rounded-full size-10 border border-green-400 pointer-events-none`}></div>
      {/* navbar */}
      <Navbar/>
      {/* Hero */}
      <Hero/>
      {/* Projects */}
      <Project/>
      {/* Skills */}
      <Skill/>
      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </main>
  )
}

export default App
