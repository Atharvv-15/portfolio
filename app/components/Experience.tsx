import React, { Fragment } from 'react'

const Experience = () => {
    return (
        <div className='mt-[5rem] h-auto w-[900px] md:w-[720px] border'>
            <Fragment>
                <div className='stroke-yellow-300 w-[900px] text-left select-none text-[3rem] md:text-[4rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
                    {"<"}Experience {"/>"}
                </div>
                <div className='w-[85%] mt-10 mx-auto  md:p-2 border-opacity-70 rounded-md border-slate-500 ml-0'>
                    <div className='flex items-center justify-between gap-10'>
                        <li className='font-bold text-lg m-3 text-nowrap'> ITS Accessibility Production Analyst </li>
                        <div className='px-2 text-slate-400 text-nowrap'>  August 2023 - present </div>
                    </div>
                    <div className='mx-4 px-5 text-base text-slate-400'>
                        <ul className='list-disc list-inside'>
                            <li>Monitor ICT triage process in Service Now and escalate to other staff as needed</li>
                            <li>Review ICT request content & facilitate communication with campus requesters and vendors as needed</li>
                            <li>Provide virtual and front-line support to students, faculty, and staff to ensure timely access to accessible materials</li>
                            <li>Maintain and update OCR software and Assistive Technologies on production systems</li>
                            <li>Process physical and electronic course materials & textbooks into accessible format(s)</li>
                            <li>Complete tasks requested via electronic requests; verify adoption, secure e-text, evaluate against production standards for assignment</li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        </div>
    )
}

export default Experience