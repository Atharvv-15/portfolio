import React from 'react'

const Contact = () => {
  return (
    <div className='mt-[5rem] h-auto w-[900px] md:w-[720px]'>
        <div className='stroke-yellow-300 select-none text-left text-[3rem] md:text-[4rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
                {"<"}Get In Touch {"/>"}
            </div>
            <div>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-white border border-green-600 dark:border-green-600 dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Contact Me
</button>
            </div>
    </div>
  )
}

export default Contact