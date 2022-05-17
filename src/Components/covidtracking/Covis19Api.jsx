import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Covis19Api() {
    const [data1, setdata] = useState([])

    const fetchapi = async () => {
        //const d= await fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
        const d = await fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
        let actualdata = await d.json();
        //console.log(actualdata.data.regional)
        setdata(actualdata.data.regional)
        //setdata(["actualdata","Abhi"])
    }
    useEffect(()=>{
        fetchapi();
    })
    return (
        <>
            <div className="container-fluid">
                <div className="main-heading">
                    <h1 className="my-2 text-center">Total Hospital and beds number in india</h1>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Sr.no.</th>
                                <th scope="col">State</th>
                                <th scope="col">Rural-beds</th>
                                <th scope="col">Rural-hospitals</th>
                                <th scope="col">Urban-beds</th>
                                <th scope="col">Urban-Hospital</th>
                                <th scope="col">Total-Beds</th>
                                <th scope="col">Total-Hospials</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data1.map((currData,index)=>{
                                   return(
                                       <tr>
                                           <th>{index}</th>
                                           <td>{currData.state}</td>
                                           <td>{currData.ruralBeds}</td>
                                           <td>{currData.ruralHospitals}</td>
                                           <td>{currData.urbanBeds}</td>
                                           <td>{currData.urbanHospitals}</td>
                                           <td>{currData.totalBeds}</td>
                                           <td>{currData.totalHospitals}</td>
                                       </tr>
                                   )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Covis19Api;