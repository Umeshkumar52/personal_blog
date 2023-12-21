import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GallaryCard from '../components/GallaryCard'
export default function Gallary() {
const img=[
{url: 'https://api.slingacademy.com/public/sample-photos/1.jpeg', title: 'Defense the travel audience hand', user: 28, description: 'Leader structure safe or black late wife newspaper her pick central forget single likely.', id: 1},
{url: 'https://api.slingacademy.com/public/sample-photos/2.jpeg', title: 'Space build policy people model treatment town hard use', user: 25, description: 'Much technology how within rather him lay why part actually system increase feel.', id: 2},
{url: 'https://api.slingacademy.com/public/sample-photos/3.jpeg', title: 'Party about different guess bill too owner', user: 7, description: 'Street anything piece south yard since well point summer school economy respond people mother.', id: 3},
{url: 'https://api.slingacademy.com/public/sample-photos/4.jpeg', title: 'Table husband', user: 22, description: 'Skill drug college contain herself future seat hum…asure government clearly question quickly parent.', id: 4},
{url: 'https://api.slingacademy.com/public/sample-photos/5.jpeg', title: 'Support audience model program three music', user: 25, description: 'World early north TV around meet goal across reaso…onsibility have must build up some language soon.', id: 5},
{url: 'https://api.slingacademy.com/public/sample-photos/6.jpeg', title: 'Apply future response she reduce decide', user: 30, description: 'Training beautiful age four skin cultural hundred …ood go physical relate produce tough open police.', id: 6},
{url: 'https://api.slingacademy.com/public/sample-photos/7.jpeg', title: 'Fire year candidate too like', user: 20, description: 'Few address take for special development white career.', id: 7},
{url: 'https://api.slingacademy.com/public/sample-photos/8.jpeg', title: 'Reflect design camera land girl wind behind side', user: 13, description: 'Drug if approach out according set home job compan…ce trouble act huge easy style physical so month.', id: 8},
{url: 'https://api.slingacademy.com/public/sample-photos/9.jpeg', title: 'Per nature research', user: 2, description: 'Nature focus wonder behind magazine pattern degree far without tree consider.', id: 9},
{url: 'https://api.slingacademy.com/public/sample-photos/10.jpeg', title: 'Yard', user: 30, description: 'Parent talk collection fill between management pur…h fight real teacher successful me arrive little.', id: 10}
]
const [Items,setItems]=useState(3)
const [showMore,setShowMore]=useState(true)
function showMoreItems(){
  setItems(img.length)
  setShowMore(false)
}
function showLessItems(){
  setItems(3)
  setShowMore(true)
}
// const data=[]
//  async function images(){
//     const response=await axios(
//       {
//         method: 'get',
//         dataType: 'json',
//         url: "https://api.slingacademy.com/v1/sample-data/photos",
//         headers: { 'Accept': 'application/json',
//         'Content-Type': 'application/json' }
//     })   
    
//     console.log(response);
//   }
 
//  useEffect(()=>{
//     images()
//  },[])

  return (
    <div className='w-full flex flex-col items-center mb-10 border-b-2 border-slate-800 border-opacity-100 shadow-xl'>
    <div className='grid gap-x-2 gap-y-2 lg:grid-cols-3 rounded-lg'>
     {
      img.slice(0,Items).map((Element)=>{
       return <GallaryCard key={Element.id} url={Element.url}/>
      })
     }
    </div>
    {(showMore)?<button onClick={showMoreItems} className='bg-slate-500 text-white rounded-lg px-2 py-1 hover:bg-slate-600 xl:text-3xl lg:text-xl'>Show more</button>:<button onClick={showLessItems}  className='sticky bottom-0 bg-slate-500 text-white rounded-lg px-2 py-1 hover:bg-slate-600  xl:text-3xl lg:text-xl'>Show less</button>}
    </div>
  )
}
