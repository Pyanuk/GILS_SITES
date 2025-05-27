import React from "react";
import Headerreg from "../headerreg";
import "../../css/regstart.css"
import { Link } from "react-router-dom";

class Regstart extends React.Component{
    render(){
        return(
            <div>
                <main className="main">
                      <div className="wrapper">
                        <div className="intro-start">
                            <div className="background-gradient-start"/>
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

                                <section className="button-section">
                                    <Link to={'/register1'}>
                                        <button className="create-accoutn-button">Создать новый аккаунт</button>
                                    </Link>
                                    <Link to={'/login'}>
                                        <button className="login-button">Войти в аккаунт</button>
                                    </Link>
                                </section>

                                <section className="authorisation-methods">
                                    <button className="google-btn"><img src="svg/Google.svg" alt="google"/></button>
                                    <button className="apple-btn"><img src="svg/Apple.svg" alt="apple"/></button>
                                    <button className="facebook-btn"><img src="svg/Facebook.svg" alt="facebook"/></button>
                                    <button className="twitch-btn"><img src="svg/Twitch.svg" alt="twitch"/></button>
                                    <button className="yandex-btn"><img src="svg/Yandex.svg" alt="yandex"/></button>
                                    <button className="discrod-btn"><img src="svg/Discord.svg" alt="Discord"/></button>
                                </section>

                            </div>

                        </section>
                        </div>
                      </div>
                </main>
            </div>
        )

        
    }
}

export default Regstart