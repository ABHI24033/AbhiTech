import React, { useState } from "react";
import './CssFolder/TudoList.css'
import ListOfTudo from "./ListOfTudo";


function TudoList() {
    const [input, setinput] = useState('')
    const [item, setItem] = useState([])
    const inputText = (event) => {
        setinput(event.target.value)
    }
    const inputValue = () => {
        if(input===''){
            alert("Plaese enter a value")
        }
        else{
           setItem((oldItem) => {
            return [...oldItem, input];
        }) 
        }
        
        //setItem('');
        setinput("")
    }
//function list(){
     const DeleteItem=(id)=>{
        setItem((oldItem)=>{
            return oldItem.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }
//}
   

    return (
        <>
            <div className="first_div">
                <div className="center_div">
                    <br />
                    <h1>Tudo List</h1>
                    <br />
                    <input type="text" placeholder="Add an item"
                        onChange={inputText}
                        value={input}
                    />
                    <button onClick={inputValue}>+</button>;
                    {/*<br />*/}
                    <ul>{
                        item.map((itemValue,index) => {
                            return (
                                    <ListOfTudo
                                    key={index}
                                    id={index}
                                    value1={itemValue}
                                    delete={DeleteItem}
                               />                              
                            )
                            })}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default TudoList;