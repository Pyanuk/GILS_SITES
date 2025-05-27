import React from "react";
import Headerreg from "../headerreg";
import "../../css/register3.css"
import { Link } from "react-router-dom";

/* block for 3 register page*/


class Register3 extends React.Component{
    render(){
        return(
            <div>
                <div>
                <main className="main">
                      <div className="wrapper">
                        <div className="intro-start">
                            <div className="background-gradient-register3"/>
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
                                            <input placeholder="Email" className="input-field" type="email"></input>
                                        </p>
                                        <p>
                                            <input placeholder="Пароль" className="input-field"></input>
                                        </p>
                                        <p>
                                            <input placeholder="Повторите пароль" className="input-field" ></input>
                                        </p>
                                        <button type="submit" className="submit-btn" >Зарегестрироваться и продолжить</button>
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

export default Register3;