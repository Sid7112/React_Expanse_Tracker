import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";

ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById("root")
);