import React from 'react'
import HomeLayout from './HomeLayout'
import img from '../uploads/Umesh kumar photo3.jpg'
export default function Home() {
  return (
    <HomeLayout>
      <div className='w-full overflow-hidden flex flex-col gap-6 xl:my-20 mb-20 mt-10'>
        <div className='flex flex-col lg:flex-row gap-6 w-full justify-around items-center'>
         <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-4xl xl:text-6xl font-bold flex flex-col text-white'>
            I Build Custom<span className='text-[#02bcfa]'>Website Solutions</span>That help Your <span className='text-[#02bcfa]'>Bussiness Grow</span>
          </h1>
          <p className='text-sm font-sans text-slate-50 flex flex-col xl:text-2xl'>I help you increase conversion and performance<span> in every possible way</span></p>
          <div className='flex gap-6'>
            <button className='bg-indigo-600 rounded-lg text-white font-bold text-lg px-3 py-1 xl:py-3 xl:text-2xl '><a href='https://www.linkedin.com/in/umesh-kumar-b20088253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>See my work</a></button>
            <button className='bg-indigo-600 rounded-lg text-white font-bold text-lg px-3 py-1 xl:py-3 xl:text-2xl '><a href='https://www.linkedin.com/in/umesh-kumar-b20088253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Start projects</a></button>
          </div>
          </div>
          <div className='flex justify-center items-center'> 
          <img src={img} className='h-[16rem] w-[16rem] lg:h-[20rem] xl:h-[30rem] xl:w-[30rem] lg:w-[20rem] rounded-tl-full rounded-bl-full  rounded-br-full'/>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl xl:text-4xl font-serif text-[#9b49e7]'>Our Achievments</h1>
        <div className="carousel w-[95%] h-[10rem] lg:h-[15rem] rounded-lg">
  <div id="item1" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div>
        </div>
        {/* Gallary component */}

      </div>
    </HomeLayout>
  )
}
