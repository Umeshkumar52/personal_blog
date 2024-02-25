import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Gallary from './Gallary'
export default function HomeLayout({children}) {
  return (
    <div className='flex overflow-hidden w-full flex-col'>
      <div className="navbar bg-base-100 flex w-full justify-end gap-8">
  <div className="flex-1 lg:hidden ">
  <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="drawer-button pl-10"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
  </div>  
  <div className="drawer-side h-[100%]">
     
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    
    <ul className="menu text-xl font-bold p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <div className='flex justify-center pb-10 text-4xl font-bold text-white'> <h1>Menu</h1></div>
      <li className='w-full  rounded-lg ' ><Link to='/portfolio'>Portfolio</Link></li>
     <li className=' w-full  rounded-lg' ><Link to='/service'>Service </Link></li>
      <li className=' w-full  rounded-lg' ><Link to='/contactus'>Contact us </Link></li>
    </ul>
  </div>
</div> 
  </div>
 
  <div className="flex-none gap-4">
    <ul className='flex font-serif text-lg gap-10 invisible lg:visible '>
      <li><Link to='/service'>Service</Link> </li>
      <li><Link to='/contactUs' >contact us</Link></li>
      <li><Link to='/portfolio'  >Portfolio</Link> </li>
      <li> </li>
    </ul>
 
  </div>
      </div>
      {children}
 
      <Gallary/>
 
      <Footer/>
    </div>
  )
}
