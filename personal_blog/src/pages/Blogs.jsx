import React, { useEffect } from 'react'
import axios from 'axios'
export default function Blogs() {
  const blogsData={}
async function blog(){
  const res=await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-12-16&to=2023-12-16&sortBy=popularity&apiKey=9b4eed5f5c8a4d74a28f2ad9009cee85')
  console.log(res.data.articles);
 
}
useEffect(()=>{
blog()
},[])
  return (
    <div>
      <h1>We have create some thoughts for you</h1>
      <div>
        
      </div>
    </div>
  )
}
