import React from "react";
import Headerreg from "../headerreg";
import "../../css/login.css";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

interface LoginProps {}

interface LoginState {
  email: string;
  password: string;
  error: string | null;
  loading: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
      loading: false
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      error: null
    }));
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      const response = await axios.post("http://localhost:5085/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      });

      console.log("Успешный вход:", response.data);

      localStorage.setItem("user", JSON.stringify({
        id: response.data.userId,
        name: response.data.userName,
        role: response.data.roleId
      }));

      window.location.href = "/";
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Ошибка входа:", axiosError.response?.data);
      this.setState({
        error: (axiosError.response?.data as string) || "Произошла ошибка при входе",
        loading: false
      });
    }
  };

  render() {
    const { email, password, error, loading } = this.state;

    return (
      <div>
        <main className="main">
          <div className="wrapper">
            <div className="intro-start">
              <div className="background-gradient-login" />
              <div className="intro-header">
                <Headerreg />
              </div>
              <section className="intro-body-start">
                <div className="regcard">
                  <div className="upperbuttons">
                    <Link to={"/"}>
                      <button className="unionbutton">
                        <img src="svg/UnionWhite.svg" alt="Union" className="imagebtnunion" />
                      </button>
                    </Link>
                    <Link to={"/regstart"}>
                      <button className="crossbutton">
                        <img src="svg/Cross.svg" alt="exit" />
                      </button>
                    </Link>
                  </div>
                  <div className="reg-card-desc">
                    <h1 className="regcardtext">Давайте начнём!</h1>
                    <a className="bottom-text">Миллионы треков. Meret AI знает ваш ритм. Это не просто музыка - это GILS</a>
                  </div>
                  <div className="input-section">
                    <form onSubmit={this.handleSubmit}>
                      <p>
                        <input
                          name="email"
                          placeholder="Email или номер телефона"
                          className="input-field"
                          type="email"
                          value={email}
                          onChange={this.handleInputChange}
                          required
                        />
                      </p>
                      <p>
                        <input
                          name="password"
                          placeholder="Пароль"
                          className="input-field"
                          type="password"
                          value={password}
                          onChange={this.handleInputChange}
                          required
                        />
                      </p>
                      {error && <div className="error-message">{error}</div>}
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                      >
                        {loading ? "Загрузка..." : "Войти в аккаунт"}
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;