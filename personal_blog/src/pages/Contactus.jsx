import React from 'react'
export default function Contactus() {
  return (
    <div className='flex flex-col items-center justify-center'>
     <div className='xl:text-3xl'>
      <h1 className='text-3xl text-slate-400 font-serif xl:text-6xl'>Get in touch</h1>
      <p className='flex flex-col text-slate-200 font-normal gap-0 xl:text-2xl'>
       How can we help you,Kindly submit your query here<span>our team response your query as soon as possible.</span>
      </p>
      <form className='flex flex-col justify-center gap-6'>
      <div className='flex flex-col gap-4'>
       <div>
        <label className='block'>Name</label>
        <input type='text' placeholder='First Name' className='border-2 px-4 py-1 text-white font-normal'/> <input type='text' placeholder='Last Name' className='border-2 px-4 py-1 text-white font-normal'/>
        </div>
       <div>
        <label className='block'>Email</label>
        <input type='text' placeholder='Email' className='border-2 px-4 py-1 text-white font-normal'/>
        </div> 
      <div>
        <label className='block'>Message</label>
        <textarea type='text' placeholder='message...' className='border-2 px-4 py-1 text-white font-normal'/>
    </div>
     </div>
     <div>
       <label className='block'>
        <button type='submit' className='border-2 px-4 py-1 text-white font-normal'>Submit</button>
        </label>
     </div>
      </form>
      </div>
    </div>
  )
}
