import { useParams,useLocation,useNavigate } from "react-router-dom";
import React  from "react";
//import {Link} from 'react-router-dom'

function RouterAbout(props){
    const {name}=useParams();
    const location=useLocation();
    console.log(location)
    const  naviagte=useNavigate();
    //console.log(history)
    const click=()=>{
        naviagte("/home")
    }
    return(
        <>  
            <div>This is abhishek kumar and {name} About {props.mae}</div>
            <h1>this is abhishek kumr:{location.pathname}</h1>
            <button onClick={click}> Go Back</button>
            

        </>
    )
}
export default RouterAbout;