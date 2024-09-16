import AboutMe from './components/AboutMe';
import Work from './components/Work';
import GitHubCalendarComponent from './lib/GitHubCalendar';
import TypeWriterComponent from './lib/TypeWriterComponent';
import FramerMotionComponent from './lib/FramerMotionComponent';
import Footer from './components/Footer';
import Acheivements from './components/Acheivements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import {TabsDemo} from './components/About-me-tabs';

const Body = () => {
    return (
        <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden custom-scrollbar " >
            <div className='w-full ml-[15rem] m-auto'>
                <div className='p-3 px- mt-12 w-[500px] font-bold text-xl text-color'>
                    Hi, I&apos;m
                </div>
                <FramerMotionComponent />
                <TypeWriterComponent />
                <div className='max-w-[900px] text-slate-200 px- p-2 desc-color text-[13px] md:text-[15px] my-4'>
                    A Software Developer based in Silicon Valley. I always aim for the best code quality and smooth coding. I&apos;m excited about using new technologies in my projects.
                </div>
            </div>
            <div className='w-full ml-[15rem] m-auto'>
                <GitHubCalendarComponent />
            </div>

            <div className='w-[700px] flex flex-col items-center ml-[15rem]  '>
                <TabsDemo/>
            </div>
            <div className='w-[700px] flex flex-col items-center ml-[15rem]  '>
                <AboutMe/>
            </div>
            
            <div className='w-full m-auto ml-[15rem]'>
                <Experience />
            </div>
            
            <div className='w-full m-auto ml-[15rem]'>
                <Acheivements />
            </div>

            <div className='w-[900px] m-auto'>
            <Work />
            </div>

            <div className='w-[900px] m-auto '>
                <Contact/>
            </div>
            {/* CONTACT */}
            {/* <div className='mt-[5rem] h-[auto]  w-[750px] border-x border-white' >
                     <div className='stroke-yellow-300 text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}Contact me {"/>"}   </div>
               </div> */}
            <Footer />
        </div>
    )
}

export default Body 