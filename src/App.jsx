import React from "react";
//import Covis19Api from "./Components/covidtracking/Covis19Api";
//import Clock from "./Components/Clock";
//import Greeting from "./Components/Greeting";
//import Cards from "./Components/Cards";
import './Components/CssFolder/Cards.css'
import Router from "./Components/Router/Router";
//import UseEffect from "./Components/useEffect/UseEffect";
//import TudoList from "./Components/TudoList";
//import MoviesDetail from "./Components/MoviesDetail";
//import Form from "./Components/Form";
//import InterviewQuestion from './Components/InterView questions/Accourdian'

function App() {

    return (
        <React.Fragment>

            {/*<h1 id="heading">Top 10 Movies from Hotstar</h1>*/}
            {/*<Clock/>
                <Greeting/>*/}
            {/*<div class="row">
                {MoviesDetail.map((m) => {
                    return(
                        <div className="column"><Cards name={m} /></div>
                    )   
                })}
            </div>*/}
            {/*<Form/>*/}
            {/*<TudoList/>*/}
            {/*<InterviewQuestion/>*/}
            {/*<Covis19Api/>*/}
            {/*<UseEffect/>*/}
            <Router/>
        </React.Fragment>
    )
}
export default App;