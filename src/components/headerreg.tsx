import React from "react";
import  "../css/headerreg.css";

/* module that just contains logo*/
class Headerreg extends React.Component{
    render(){
        return(
            <header>
                <img src="svg/UnionWhite.svg" alt="Union"/>
            </header>
        )
    }
}

export default Headerreg;