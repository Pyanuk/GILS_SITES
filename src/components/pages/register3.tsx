import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from './FormContext';
import Headerreg from '../headerreg';
import '../../css/register3.css';

const Register3: React.FC = () => {
  const navigate = useNavigate();
  const { data, updateData } = useFormContext();

  const [email, setEmail] = useState(data.email || '');
  const [password, setPassword] = useState(data.password || '');
  const [confirmPassword, setConfirmPassword] = useState(data.confirmPassword || '');

  const convertDate = (dateStr: string): string => {
    const [dd, mm, yyyy] = dateStr.split('.');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    updateData({ email, password, confirmPassword });

    // Преобразуем строки id в числа для отправки на сервер
    const countryid = data.country ? parseInt(data.country) : 0;
    const cityid = data.city ? parseInt(data.city) : 0;

    const payload = {
      firstname: data.firstname,
      lastname: data.lastname || '',
      birthday: convertDate(data.birthday),
      phone: data.phone,
      email,
      password,
      countryid,
      cityid,
    };

    try {
      const response = await fetch('http://localhost:5085/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert('Ошибка: ' + (errorData.title || 'Не удалось зарегистрироваться'));
        return;
      }

      alert('Регистрация прошла успешно!');
      navigate('/success');
    } catch (error) {
      alert('Не удалось подключиться к серверу.');
    }
  };

  return (
    <div>
      <main className="main">
        <div className="wrapper">
          <div className="intro-start">
            <div className="background-gradient-register3" />
            <div className="intro-header">
              <Headerreg />
            </div>
            <section className="intro-body-start">
              <div className="regcard">
                <div className="upperbuttons">
                  <button className="unionbutton" onClick={() => navigate('/')}>
                    <img src="svg/UnionWhite.svg" alt="Union" className="imagebtnunion" />
                  </button>
                  <button className="crossbutton" onClick={() => navigate('/regstart')}>
                    <img src="svg/Cross.svg" alt="exit" />
                  </button>
                </div>
                <div className="reg-card-desc">
                  <h1 className="regcardtext">Завершим регистрацию!</h1>
                  <p className="bottom-text">
                    Миллионы треков. Meret AI знает ваш ритм. Это не просто музыка — это GILS
                  </p>
                </div>
                <div className="input-section">
                  <form onSubmit={handleSubmit}>
                    <p>
                      <input
                        placeholder="Email"
                        className="input-field"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </p>
                    <p>
                      <input
                        placeholder="Пароль"
                        className="input-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </p>
                    <p>
                      <input
                        placeholder="Повторите пароль"
                        className="input-field"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </p>
                    <button type="submit" className="submit-btn">
                      Зарегистрироваться и продолжить
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

export default Register3;
