import React from "react";
//import {BrowserRouter,Route} from 'react-router-dom'
import About from './RouterAbout';
import Home from './RouterHome'
import { Route,Link, BrowserRouter, Routes } from 'react-router-dom';
import Error from "./Error";
import Search from "./Search";

function Rout() {
    return (
        <>
        
            <BrowserRouter><nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/search">Search</Link>
            </nav>
                <Routes>
                    <Route exact path="/about/" element={<About mae="DFGDFDJFOD"/>} />
                    <Route exact path="/about/:name" element={<About mae="DFGDFDJFOD"/>} />
                    <Route exact path="/home" element={<Home/>} />
                    <Route exact path="/search" element={<Search/>} />
                    <Route  path="*" element={<Error/>} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Rout;