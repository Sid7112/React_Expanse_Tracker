import axios from "axios";
import {useParams ,useNavigate } from "react-router-dom";


const Delete = () =>{

    const{expID} = useParams();

    console.log(expID);

    const navigate = useNavigate();

    axios.delete(`http://localhost:5500/exp/${expID}`)
    .then(()=>{
        alert("Data deleted");
        navigate("/");
    })
    .catch(()=>{
        alert("Data ouldn't be deleted!");
    })

    return(
        <></>
    )
}

export default Delete;