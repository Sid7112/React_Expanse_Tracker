import React from "react";
import "./App.css"
import Expenses from "./Components/Expenses";
import Expanseform from "./Components/Expenseform";

const App = () => {

    return (
        <React.Fragment>
            <div className="z">
                <Expanseform/>
                <Expenses/>
            </div>
        </React.Fragment>
    );
}

export default App;