
'use client'
import { useState, useEffect } from "react"

export default function Useeffect(){
const [count, setCount] = useState(0)

useEffect(()=>{
    console.log("Running useEffect")
},[])

useEffect(()=>{
    console.log("2nd Running useEffect count1")
},[count])

return(
        <>
        <p>React Hook / useEffect</p>
        <br/>
        <button onClick={()=>{setCount(count+1)}}>Counter Increment1 = {count} </button>
        </>
    )
}