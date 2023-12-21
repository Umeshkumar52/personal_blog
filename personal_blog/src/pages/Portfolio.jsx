import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div className='bg-[#373739] flex flex-col gap-20 justify-center w-full h-[100%]'>
      <div className='relative bg-slate-300 w-full'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr85OSi2iuGOMPUI3sMnSgTOqRqY-a3qh0Uw&usqp=CAU' className='w-full h-[13rem] xl:h-[20rem] '/>
       <div className='absolute top-1/3 left-1/4 '>
        <h1 className='flex flex-col text-2xl xl:text-6xl lg:text-4xl shadow-xl opacity-70 font-serif text-white justify-center items-center'>
            Free consultation for University
            <span>Applicants</span>
        </h1>
        </div>
      </div>
      <div className='flex flex-col items-center px-10 lg:flex-row'>
        <div className='flex flex-col xl:text-3xl lg:text-2xl items-center px-10 gap-6 lg:w-[50%]'>
         <p className='text-slate-200 font-normal'>
          If you have any query to decide
           right carear choice of your life 
          and want to get guidence about carear,
          you can contact us for more information 
         </p>
         <button className='px-2 py-1 font-normal text-white'>
            Read More
         </button>
        </div>
       <div className=' flex flex-col justify-center items-center lg:w-[50%] '>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHIjaK_kny_ddEmeomRlWeRmee9g7UEAVctaxAdjP2RPI1u4BX-ofJlArVrFhNkTyfHM&usqp=CAU' className='shadow-2xl w-[600px] h-[60vh] lg:w-[70%]'/>
       </div>
      </div>
      <div className='w-full xl:text-3xl lg:text-xl text-sm font-normal text-[#d3dcd3ec] h-[10rem] bg-[#505052] flex items-center justify-around'>
        <div>
        <a href='https://www.linkedin.com/in/umesh-kumar-b20088253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Apply Now</a>
        </div>
        <div>
          <Link to='/contactus'>Contact Us</Link>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/umesh-kumar-b20088253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Message</a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
