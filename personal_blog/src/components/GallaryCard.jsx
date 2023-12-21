import React from 'react'

export default function GallaryCard({url}) {
  return (
    <div>
     <div >
      <img src={url} className='h-[90vh] w-[640px] lg:[80vh] '/>
      </div>
    </div>
  )
}
