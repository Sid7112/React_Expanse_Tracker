import React from "react";
import "./Dateexpenses.css";
const Dateexpenses = (props) => {
    const monthvalue = new Date(props.row.date).toLocaleString("en-us",{month:"long"});
    const year = new Date(props.row.date).getFullYear();
    const date = new Date(props.row.date).getDate();
    return (
        <div className="datepart">
            <h2>{monthvalue}</h2>
            <h2>{year}</h2>
            <h2>{date}</h2>
        </div>
    );

};

export default Dateexpenses;