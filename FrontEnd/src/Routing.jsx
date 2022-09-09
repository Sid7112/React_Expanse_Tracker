
import {Routes,Route} from "react-router-dom";
import App from "./App";
import Delete from "./Components/Delete";
import Update from "./Components/Update";

const Routing = () =>{

  return(

    <Routes>

    <Route exact path="/" element={<App/>}></Route>

    <Route exact path="/edit/:expID" element={<Update/>}></Route>

    <Route exact path="/delete/:expID" element={<Delete/>}></Route>

</Routes>

  )

}

export default Routing;

