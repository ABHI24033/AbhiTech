//import React from './react'
//import './CssFolder/index.css'
import './CssFolder/index.css'
function Greeting() {
    let time = new Date();
    let h = time.getHours();
    let stylecss = {}
    let greet = '';
    if (h >= 1 && h <= 12) {
        greet = 'Good Morning'
        stylecss.color = "green";
    }
    else if (h >= 12 && h < 19) {
        greet = 'Good AfterNoon'
        stylecss.color = "Red"
    }
    else {
        greet = 'Good Night'
        stylecss.color = "gray"
    }
    return (
        <>
            <h1>Challenge :-3</h1>
            {/*<div className="container">*/}
                <div id='Abhi'>
                    <div className='container'>Hi Sir ,<span style={stylecss}>{greet}</span></div>
                </div>
            {/*</div>*/}

        </>
    )
}
export default Greeting;