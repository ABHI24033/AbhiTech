import React from "react";

function ListOfTudo(props){
    
    return (
        <>
        {/*<div>*/}
            <i className="fa fa-times" aria-hidden="true"
                                    //id={index}
                                    //key={props.id}
                                    onClick={()=>{
                                        props.delete(props.id)
                                    }}
                                    >
                                    </i>
                                    <li key={props.id}>{props.value1}</li><br />
        {/*</div>*/}
        </>
    )
}
export default ListOfTudo