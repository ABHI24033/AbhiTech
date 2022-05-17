import React ,{useState}from "react";

function Clock(){
    let time=new Date().toLocaleTimeString();
    const[t,setT]=useState(time)
    setInterval(()=>{
        time=new Date().toLocaleTimeString();
        setT(time)
    },1000)
    return(
        <>
            <h1>{t}</h1>
        </>
    )
}
export default Clock;