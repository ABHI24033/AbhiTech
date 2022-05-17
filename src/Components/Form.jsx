import React, { useState } from "react";
import './CssFolder/index.css'

function Form() {
    const [Fullname, setfullName] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
    })
    const HandleOnChange = (event) => {
        //let n = event.target.value;
        //setName(n)
        //console.log(event.target.name)
        //const value=event.target.value;
        //const fulname=event.target.name;
        //console.log(value)

        const {value,name}=(event.target);

        setfullName((prviousValue)=>{
            //console.log(prviousValue)
            return{
                ...prviousValue,
                 [name]:value
            }
           

            //if(name==='fname'){
            //    return{
            //        fname:value,
            //        lname:prviousValue.lname,
            //        email:prviousValue.email,
            //        phone:prviousValue.phone
            //    }
            //}
            //else if(name==='lname'){
            //    return{
            //        fname:prviousValue.fname,
            //        lname:value,
            //        email:prviousValue.email,
            //        phone:prviousValue.phone
            //    }
            //}
            //else if(name==='email'){
            //    return{
            //        fname:prviousValue.fname,
            //        lname:prviousValue.lname,
            //        email:value,
            //        phone:prviousValue.phone
            //    }
            //}
            //else if(name==='phone'){
            //    return{
            //        fname:prviousValue.fname,
            //        lname:prviousValue.lname,
            //        email:prviousValue.email,
            //        phone:value
            //    }
            //}
        })
        //console.log(name)
    }
    const Onsubmit=(event)=>{
        event.preventDefault();
        console.log("This is On Sunmit")
    }
    return (
        <><div className="Ful"><br />
            
            <form action="" onSubmit={Onsubmit}>
                <h1>This is Heading </h1>
                <div className="from">
                    <input type="text" 
                    placeholder="Enter Your name" 
                    onChange={HandleOnChange}
                    name="fname"
                    value={Fullname.fname}
                    />
                </div>
                <div className="from">
                    <input type="text" placeholder="Enter Your Last name" onChange={HandleOnChange} 
                    name="lname"
                    value={Fullname.lname}
                    />
                </div>
                <div className="from">
                    <input type="number" placeholder="Enter Your Phone Number" onChange={HandleOnChange} 
                    name="phone"
                    value={Fullname.phone}
                    autoComplete="off"
                    />
                </div>
                <div className="from">
                    <input type="email" placeholder="Enter Your Email" onChange={HandleOnChange} 
                    name="email"
                    value={Fullname.email}
                    />
                </div>
                 <button type="submit">Submit</button>
            </form>
            </div>
        </>
    )
}
export default Form;