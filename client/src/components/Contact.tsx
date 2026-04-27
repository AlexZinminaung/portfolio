import { IoIosArrowRoundUp } from "react-icons/io";

const Contact = () => {

    return (
        <section id="contact"  className='flex flex-wrap py-32 px-8 md:px-12 gap-5'>
            <div className='flex-1 flex flex-col gap-4'>
                <h1 className='text-white text-4xl sm:text-6xl font-bowlby'>Let's Work together.</h1>
                <p className='text-gray-400'>I'm open to freelance projects and collaborations. Drop me a message — I respond fast.</p>
            </div> 

            <div className='flex-1 text-white flex flex-col gap-4'>
                <a href='#' className='flex justify-between items-center p-5 border border-gray-800 hover:border-green-400 hover:text-green-400'>
                    <span>EMAIL ME</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                </a>

                <a href='#' className='flex justify-between items-center p-5 border border-gray-800 hover:border-green-400 hover:text-green-400'>
                    <span>GITHUB</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                </a>

                <a href='#' className='flex justify-between items-center p-5 border border-gray-800 hover:border-green-400 hover:text-green-400'>
                    <span>UPWORK</span>
                    <IoIosArrowRoundUp className='size-4 rotate-45'/>
                </a>
            </div>
        </section>
    )
}

export default Contact;