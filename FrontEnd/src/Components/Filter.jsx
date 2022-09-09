import React, {useState} from "react";


const Filter = (props) => {


    const [filteredYear,setfilteredYear] = useState("All");
    
    const selectedYear = (e) =>{

        e.preventDefault();


        console.log(e.target.value);

        setfilteredYear(e.target.value);




        
    }

    props.filteredValue(filteredYear);

    
    return (
       <div style={{width:"70%",margin:"10px auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h3 style={{color:"white"}}>Filter By Year</h3>
         <select onChange={selectedYear} style={{width:"100px",height:"30px",fontSize:"15px",textAlign:"center",cursor:"pointer"}}>
            <option value="All"> All </option>
            <option value="2018"> 2018 </option>
            <option value="2019"> 2019 </option>
            <option value="2020"> 2020 </option>
            <option value="2021"> 2021 </option>
            <option value="2022"> 2022 </option>
        </select>
       </div>
    );
};

export default Filter;