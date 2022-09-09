import { useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Update = () =>{

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState(0);
    const [expdate,setExpDate] = useState(new Date());

    const {expID} = useParams();

    const navigate = useNavigate();

    useEffect(()=>[

        axios.get(`http://localhost:5500/exp/${expID}`)
        .then(async(res)=>{
            const rdata = await res.data[0];
            setTitle(rdata.item);
            setAmount(rdata.price);
            const d = new Date(rdata.date).toLocaleDateString('en-CA');
            setExpDate(d);
        })
        .catch((err)=>{
            console.log(err);
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    ],[])

    


    const submitHandler = (e) =>{

        e.preventDefault();

        const dataObj = {
            item : title,
            price : amount,
            date : new Date(expdate)
        }


        axios.put(`http://localhost:5500/exp/${expID}`,dataObj);
        alert("Data Updated Successfully!");
        navigate("/");
        window.location.reload();

    }

    return(

        <>
        
        <form onSubmit={submitHandler}  id="f1" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",borderRadius:"10px"}}>
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
                    <input type="date"  onChange={ e => setExpDate(e.target.value) } value = {expdate} required/>
                </div>
                <div className="dFlex1">
                <input type="submit" value = "Update Expense" />
                </div>
            </form>
        </>
    );


}

export default Update;