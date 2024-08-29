// what is component
// component key name ka first letter capital hona chahiay
// component aik function hai
// component html ka parent element return karta hai
// component reusalbe hai
// component me javascript / typescript key ander html and css bhi likh sakte hain
// component me html ke ander  javascript / typescript bhi likh sakte hain

export const Card = ()=>{
 let a = "Component with Arrow Function"
    return(
        <div>
        <h3>{a}</h3>
        </div>
    )
}

//export default Card

export const Card2 = ()=>{
    let a = "Component with Arrow Function two"
       return(
           <div>
           <h3>{a}</h3>
           </div>
       )
   }

 export function Card3 (){
    return(
        <p>Component with name Function</p>
    )
   }
   