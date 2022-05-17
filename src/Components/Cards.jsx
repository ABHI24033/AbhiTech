import React from "react";
import './CssFolder/Cards.css'

function Cards(props){
    return(
        <>
            <div className="Cards">
                <div className="card">
                    <img src={props.name.image} alt="Netflix movies" />
                    <div className="card_info">
                        <span className="card_category">{props.name.title}</span>
                        <h3 className="card_tile">{props.name.name}</h3>
                        <a href={props.name.link} className="btn"> <button>Watch Now</button></a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cards;