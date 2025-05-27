import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from './FormContext';
import Headerreg from '../headerreg';
import '../../css/register1.css';

const Register1: React.FC = () => {
  const navigate = useNavigate();
  const { updateData } = useFormContext();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateData({ firstname, lastname, birthday });
    navigate('/register2');
  };

  return (
    <div>
      <main className="main">
        <div className="wrapper">
          <div className="intro-start">
            <div className="background-gradient-register1" />
            <div className="intro-header">
              <Headerreg />
            </div>
            <section className="intro-body-start">
              <div className="regcard-reg">
                <div className="upperbuttons">
                  <button className="unionbutton" onClick={() => navigate('/')}>
                    <img src="svg/UnionWhite.svg" alt="Union" className="imagebtnunion" />
                  </button>
                  <button className="crossbutton" onClick={() => navigate('/regstart')}>
                    <img src="svg/Cross.svg" alt="exit" />
                  </button>
                </div>
                <div className="reg-card-desc">
                  <h1 className="regcardtext">Давайте начнём!</h1>
                  <p className="bottom-text">
                    Миллионы треков. Meret AI знает ваш ритм. Это не просто музыка - это GILS
                  </p>
                </div>
                <div className="input-section">
                  <form onSubmit={handleSubmit}>
                    <p>
                      <input
                        placeholder="Имя/Никнейм"
                        className="input-field"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </p>
                    <p>
                      <input
                        placeholder="Фамилия (необязательно)"
                        className="input-field"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </p>
                    <p>
                      <input
                        placeholder="ДД.ММ.ГГГГ"
                        className="input-field"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                    </p>
                    <button type="submit" className="submit-btn">
                      Продолжить
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
};

export default Register1;
