import React from 'react'
import { Toast, toast,ToastContainer } from 'react-toastify'
export default function Contactus() {
  function sendmessage(event){
    toast("Message Send Successfully",{
      position:toast.POSITION.TOP_CENTER,
     duration:3000
     })
  
  }
  return (
    <div className='flex flex-col items-center justify-center'>
     <div className=' xl:text-3xl flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-slate-400 font-serif xl:text-6xl'>Get in touch</h1>
      <p className='flex flex-col text-slate-200 w-[40vh] lg:w-[60vh] font-normal xl:text-2xl'>
       How can we help you,Kindly submit your query here our team response your query as soon as possible.
      </p>
      <form className='flex flex-col justify-center gap-6'>
      <div className='flex flex-col gap-4'>
       <div className='flex flex-col gap-4'>
       <div>
        <label className='block'>First Name</label>
        <input type='text' placeholder='First Name' className='border-2 px-4 py-1 text-white font-normal'/>
      </div>
       <div>
        <label className='block'>Last Name</label>
        <input type='text' placeholder='Last Name' className='border-2 px-4 py-1 text-white font-normal'/>
       </div>
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
        <button type='submit' onClick={sendmessage} className='border-2 px-4 py-1 text-white font-normal'>Submit</button>
        </label>
     </div>
      </form>
      </div>
      <ToastContainer/>
    </div>
  )
}
