import React from "react";
import Headerreg from "../headerreg";
import "../../css/register2.css"
import { Link } from "react-router-dom";

/* block for 2 register page*/

class Register1 extends React.Component{
    render(){
        return(
            <div>
                <div>
                <main className="main">
                      <div className="wrapper">
                        <div className="intro-start">
                            <div className="background-gradient-register2"/>
                        <div className="intro-header">
                            <Headerreg/>
                        </div>
                        <section className="intro-body-start">
                            <div className="regcard">
                                <div className="upperbuttons">
                                    <Link to={"/"}>
                                        <button className="unionbutton">
                                            <img src="svg/UnionWhite.svg" alt="Union" className="imagebtnunion"/>
                                        </button>
                                    </Link>
                                    <Link to={"/regstart"}>
                                        <button className="crossbutton">
                                            <img src="svg/Cross.svg" alt="exit"/>
                                        </button>
                                    </Link>
                                </div>
                                <div className="reg-card-desc">
                                    <h1 className="regcardtext">Давайте начнём!</h1>
                                    <a className="bottom-text">Миллионы треков. Meret AI знает ваш ритм. Это не просто музыка - это GILS</a>
                                </div> 
                                <div className="input-section">
                                    <form>
                                        <p>
                                            <input placeholder="Страна" className="input-field"></input>
                                        </p>
                                        <p>
                                            <input placeholder="Город" className="input-field"></input>
                                        </p>
                                        <p>
                                            <input placeholder="+7 (999) 999 99 99" className="input-field"  type="tel"></input>
                                        </p>
                                        <Link to={"/register3"}>
                                            <button type="submit" className="submit-btn" >Продолжить</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </section>
                        </div>
                      </div>
                </main>
            </div>
            </div>
        )
    }
}

export default Register1;