
import React, { useEffect, useState } from "react";

function UseEffect(){
    const [count,setCount]=useState(0)
    const ccc=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        if(count===0){
             document.title=`useEffect`
        }
        else{
            document.title=`useEffect(${count})`
        }     
    })
    //console.log("Thosis Outside")
    return (
        <>
        <h1>{count}</h1>
        <button onClick={ccc}>Click Me</button>
        </>
    )
}
export default UseEffect;
