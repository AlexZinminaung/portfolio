
const Skill = () => {

    return (
        <section id="skills" className=' py-32 px-8 md:px-12 flex flex-col gap-12'>

            {/* header */}
            <h1 className='flex justify-start items-center gap-4'>
                <span className=' text-green-400'>02</span> 
                <span className='text-white text-4xl sm:text-6xl font-bowlby'>Skills</span>
                <span className='w-full h-px bg-gray-800'></span>
            </h1>
            
            {/* skills box container */}
            <div className="flex flex-wrap gap-1">
                {/* Frontend */}
                <div className="flex-1 flex flex-col gap-8 p-5 bg-gray-950">
                    <h3 className="text-green-400 text-xs">FRONTEND</h3>
                    <ul className="text-white text-xs flex flex-col gap-2">
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>React</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Tailwind Css</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Gsap animation</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Responsive</span></li>  
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Phaser</span></li>             
                    </ul>
                </div>

                {/* Backend */}
                <div className="flex-1 flex flex-col gap-8 p-5 bg-gray-950">
                    <h3 className="text-green-400 text-xs">BACKEND</h3>
                    <ul className="text-white text-xs flex flex-col gap-2">
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Node.js</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Express</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Rest Api</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>JWT Auth</span></li>        
                    </ul>
                </div>

                {/* Real Time */}
                <div className="flex-1 flex flex-col gap-8 p-5 bg-gray-950">
                    <h3 className="text-green-400 text-xs">FRONTEND</h3>
                    <ul className="text-white text-xs flex flex-col gap-2">
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Socket.io</span></li>  
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Live Chat Systems</span></li>          
                    </ul>
                </div>

                {/* Database */}
                <div className="flex-1 flex flex-col gap-8 p-5 bg-gray-950">
                    <h3 className="text-green-400 text-xs">DATABASE</h3>
                    <ul className="text-white text-xs flex flex-col gap-2">
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Postgresql</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>SQL</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Database Design</span></li>          
                    </ul>
                </div>

                {/* Other */}
                <div className="flex-1 flex flex-col gap-8 p-5 bg-gray-950">
                    <h3 className="text-green-400 text-xs">OTHERS</h3>
                    <ul className="text-white text-xs flex flex-col gap-2">
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Figma</span></li>
                        <li className="flex gap-2 items-center"><span className="block h-2 aspect-square bg-green-400"></span><span>Canvas</span></li>        
                    </ul>
                </div>
            </div>
        </section>
    );
}


export default Skill;