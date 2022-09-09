/* eslint-disable eqeqeq */
import React, { useState } from "react";
import Dateexpenses from "./Dateexpenses";
import "./Expenses.css"
import Filter from "./Filter";
import Chart from "./Chart";
import { useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Expenses = () => {

    const [updateYear, setUpdateYear] = useState();

    const[dummyData,setDummyData] = useState([]);

    const filteredValue = (filteredYear) => {
        console.log(filteredYear);
        setUpdateYear(filteredYear);
        console.log(updateYear);
    }

    useEffect(()=>{

        axios.get("http://localhost:5500/exp")
        .then(async(res)=>{
            const rawdata = await res.data;
            setDummyData(rawdata);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])


    
        let filterRecord = dummyData.filter(row => {
        if (updateYear == "All") {
            return (row)
        }
        else {
            return (new Date(row.date).getFullYear() == updateYear
            )

        }
    });



    return (
        <>

            <Filter filteredValue={filteredValue} />
            <Chart filterRecord={filterRecord}/>
            {
                filterRecord.reverse().map(row => {
                    return (

                        <div className="expenseList">
                            <div className="x">
                            <div>
                                <NavLink exact to = {`/edit/${row._id}`}>
                                    <button style={{backgroundColor:"green"}}>Edit</button>
                                </NavLink>
                            </div>
                            <div>
                               <NavLink  exact to={`/delete/${row._id}`}>
                                    <button style={{backgroundColor:"red"}}>Delete</button>
                               </NavLink>
                            </div>
                            </div>
                           <div className="y">
                           <div>
                                <Dateexpenses row={row} />
                            </div>
                            <div>
                                <h1>{row.item}</h1>
                            </div>
                            <div className="pricepart">
                                <h1>${row.price}</h1>
                            </div>
                           </div>
                        </div>

                    );
                })
            }

        </>
    );
}

export default Expenses;