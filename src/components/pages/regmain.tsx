import React  from "react";
import Headerreg from '../headerreg';
import "../../css/reg.css"
import { Link } from "react-router-dom";
/*Start page for register and login*/
class Regmain extends React.Component{
        render(){
            return(
                <div>
                    <main className="main">
                        <div className="wrapper">
                            <div className="intro">
                                <div className="background-gradient">
                                </div>
                                <div className="intro-header">
                                    <Headerreg/>
                                </div>
                            <section className="intro-body">
                                <img src="svg/GILS.svg" alt="Union"></img>
                                <h2 className="title2">Ритм бесконечен</h2>
                                <h3 className="title3">Начни слушать музыку сейчас</h3>
                                <Link to={"/regstart"}>
                                    <button className="enter-button">Давайте начнём</button>
                                </Link>
                            </section>
                            </div>

                        </div>
                    </main>
                </div>
            )

        }
    }

export default Regmain;