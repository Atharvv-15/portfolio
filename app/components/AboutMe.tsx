import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skills from '../lib/Skills';
import Image from 'next/image';
import { ThreeDCardDemo } from '../lib/Card-effect';

const AboutMe = () => {
    return (
        <div className='mt-[5rem] h-auto  md:w-[720px] min-w-full'>
            <div className='stroke-yellow-300 text-left select-none text-[3rem] md:text-[4rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
                {"<"}About Me {"/>"}
            </div>

            <div className='flex'>

            <div className='flex items-center'>
                <div className='w-[50%] mb-10 mx-auto flex flex-shrink-0 md:p-2 border-opacity-70 rounded-md border-slate-500 ml-0'>
                    <div className=''>
                        <Tabs defaultValue="1" className="max-w-[500px]">
                            <div className=''>
                            <TabsList className='tabs-content bg-transparent text-slate-400'>
                                
                                <TabsTrigger value="1" className='tabs-content text-[15px]'>Introduction</TabsTrigger>
                                <TabsTrigger value="2" className='tabs-content text-[15px]'>Skills</TabsTrigger>
                                <TabsTrigger value="3" className='tabs-content text-[15px]'>Education</TabsTrigger>
                                {/* <TabsTrigger value="4" className='tabs-content text-[15px]'>Resume</TabsTrigger> */}
                            </TabsList>
                            </div>
                            
                            <TabsContent value="1">
                                <div className='border-slate-700 border bg-slate-800 bg-opacity-65 w-[80%] mx-4 p-2'>
                                    <div className='p-3'>🧑‍💻 Introduction</div>
                                    <div className='text-slate-300 px-4 py-2'>
                                        <p>Hello! I'm <span className='text-yellow-300'>Atharva Kharage</span>, a passionate and dedicated full stack developer with a knack for turning ideas into interactive web applications. I thrive on creating seamless user experiences and continuously learning new technologies.</p>
                                        <p>With a solid foundation in both front-end and back-end development, I specialize in building robust and scalable web applications. My expertise lies in <span className='text-yellow-300'>React</span>, <span className='text-yellow-300'>Next.js</span>, and <span className='text-yellow-300'>Node.js</span>, allowing me to deliver high-quality, efficient, and maintainable code.</p>
                                        <p>I'm a quick learner and always eager to tackle new challenges. My goal is to contribute to the success of the team and to enhance my skills through continuous learning and improvement.</p>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="2">
                                <div className='flex flex-wrap justify-center mx-auto'>
                                    <Skills />
                                </div>
                            </TabsContent>
                            <TabsContent value="3">
                                <div className='border-slate-700  bg-slate-800 bg-opacity-65 w-[80%] mx-4 p-2'>
                                    <div className='p-3 '>🧑‍💻 Education</div>
                                    <div className='text-slate-300 px-4 py-2'>
                                        <ul>
                                            <li className='mb-3 text-xl'>Masters in Computer Science | 2023-2024
                                            </li>

                                            <li>
                                            <div className='text-slate-300'>California State University, East Bay</div>
                                            </li>
                                            
                                            <li className='mt-5 text-xl'>Bachelors in Computer Engineering | 2018-2023</li>
                                        </ul>
                                    </div>
                                    <div className='text-slate-300 px-4 py-2'>Savitribai Phule Pune University | India</div>
                                </div>
                            </TabsContent>
                            {/* <TabsContent value="4">
                                <div className='border-slate-700 border ml-4 bg-slate-800 bg-opacity-65 w-[100%] md:mx-4 md:p-2'>
                                    <div className='p-3'>🧑‍💻 Resume</div>
                                    <div className='text-slate-300 px-4 py-2 flex gap-2'>
                                        <div>Download Resume</div>
                                        <img src='/download.png' width={22} className='cursor-pointer' alt="Download icon" />
                                    </div>
                                    <div className='mx-auto text-center flex justify-center'>
                                        <a href="LatestCV.pdf" target='_blank' rel='noopener noreferrer' download>
                                            <img className='h-[500px] w-[350px]' src="LatestCV.png" alt="Latest CV" />
                                        </a>
                                    </div>
                                </div>
                            </TabsContent> */}
                        </Tabs>
                    </div>
                </div>
                <div className='mt-[-10] mb-[100px] ml-10 p-4 '>
                    <ThreeDCardDemo/>
                </div>
            </div>
            </div>
            
            </div>

    );
};

export default AboutMe;
