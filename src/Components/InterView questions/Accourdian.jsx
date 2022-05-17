import React,{useState} from "react";
import './Accourdian.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from './Questions'
import Myaccourdian from "./Myaccourdian";


function Accourdian(){
  const[show,setshow]=useState(Questions)
    return(
        <>
        {/*<Myaccourdian element={show}/>*/}
        {
          show.map((elem,index)=>{
            return <Myaccourdian key={index} element={elem}/>
          })
        }        
        </>
    )
}
export default Accourdian;