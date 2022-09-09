import React,{useState} from "react";
import "./Expenseform.css";
import axios from "axios";


const Expenseform = () => {

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState(0);
    const [date,setDate] = useState(new Date());
    const [formView, setformView] = useState(false);


    const submitHandler = (e) => {

        
        e.preventDefault();

        const dataObj = {
            item : title,
            price : amount,
            date : new Date(date)
        }

        axios.post("http://localhost:5500/exp",dataObj)
        .then((res)=>{
            alert("Data Added Successfully!");
        })
        .catch((err)=>{
            alert("Data Couldn't be Added!");
        })
        
        setTitle("");
        setAmount(0);
        setDate(new Date());
        setformView(false);
        window.location.reload();
    }
    return (
        <>
            <form onSubmit={submitHandler} className = {formView  ? "dblock" : "dnone" } id="f1">
                <div className="dFlex">
                <div>
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value = {title} required/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" onChange={ e => setAmount(e.target.value) } value = {amount} required/>
                </div>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date"  onChange={ e => setDate(e.target.value) } value = {date} required/>
                </div>
                <div className="dFlex1">
                <input type="submit" value = "Add Expense" />
                </div>
            </form>
            <div className = {formView ? "dnone" : "dblock d1"} >
            <button onClick={ () => setformView(!formView)} className = {formView  ? "dnone" : "dblock"}> Add New Expense </button>
            </div>
        </>
    );
};

export default Expenseform;
