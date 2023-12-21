const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json)
app.listen(3000,()=>{
    console.log('app is listen on 3000 port')
})