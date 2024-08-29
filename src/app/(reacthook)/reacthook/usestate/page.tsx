
'use client'
import { useState } from "react"

export default function Usestate(){
const [name, setName] = useState("Irshad Ali")
const [age, setAge] = useState(35)

const chnage = ()=>{
    setName("Kamran")
    setAge(22)

}
    return(
        <>
        <p>React Hook / useState</p>
        <br/>
        <p>{name} Age is {age}</p>
        <button onClick={chnage}>Click for Changes</button>
        </>
    )
}