import React, { useState } from "react";
//import './Accourdian.css'
import './Accourdian.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function Myaccourdian(props){
    const[showans,setShow]=useState(false)
    let sign='';
    if(showans==false){
        sign='plus';
    }
    else{
        sign='dash';
    }
    return (
        <>
            {/*<div className="main-div">{showans==false?'+':'-'}
                <div className="middle-div">*/}
                    <div className="accor">
                        <button ><b><i class={`bi bi-${sign}`}></i></b></button>
                        <h4 onClick={()=>{return (showans===false?setShow(true):setShow(false))}}>{props.element.question}</h4>                     
                    </div>
                    {showans &&<p>{props.element.Answer}</p>}
                {/*</div>*/}
            {/*</div>*/}
        </>
    )
}
export default  Myaccourdian;