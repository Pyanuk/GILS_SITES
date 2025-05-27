import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "./FormContext";
import Headerreg from "../headerreg";
import "../../css/register2.css";

const Register2: React.FC = () => {
  const navigate = useNavigate();
  const { data, updateData } = useFormContext();

  const [countries, setCountries] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const [selectedCountryId, setSelectedCountryId] = useState<string>(data.country ? String(data.country) : "");
  const [selectedCityId, setSelectedCityId] = useState<string>(data.city ? String(data.city) : "");
  const [phone, setPhone] = useState<string>(data.phone || "");

  useEffect(() => {
    fetch("http://localhost:5085/api/location/countries")
      .then(res => res.json())
      .then(setCountries)
      .catch(err => console.error("Ошибка загрузки стран:", err));

    fetch("http://localhost:5085/api/location/cities")
      .then(res => res.json())
      .then(setCities)
      .catch(err => console.error("Ошибка загрузки городов:", err));
  }, []);

  // Фильтруем города по выбранной стране
  const filteredCities = cities.filter(city => city.countryId === Number(selectedCountryId));

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryId(e.target.value);
    setSelectedCityId(""); // сброс города при смене страны
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityId(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCountryId || !selectedCityId || !phone) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Сохраняем данные в контекст
    updateData({
      country: selectedCountryId,
      city: selectedCityId,
      phone,
    });

    navigate("/register3");
  };

  return (
    <main className="main">
      <div className="wrapper">
        <div className="intro-start">
          <div className="background-gradient-register2" />
          <div className="intro-header">
            <Headerreg />
          </div>
          <section className="intro-body-start">
            <div className="regcard">
              <div className="upperbuttons">
                <button className="unionbutton" onClick={() => navigate("/")}>
                  <img src="svg/UnionWhite.svg" alt="Union" className="imagebtnunion" />
                </button>
                <button className="crossbutton" onClick={() => navigate("/regstart")}>
                  <img src="svg/Cross.svg" alt="exit" />
                </button>
              </div>
              <div className="reg-card-desc">
                <h1 className="regcardtext">Давайте начнём!</h1>
                <p className="bottom-text">Миллионы треков. Meret AI знает ваш ритм. Это не просто музыка - это GILS</p>
              </div>
              <div className="input-section">
                <form onSubmit={handleSubmit}>
                  <p>
                    <select
                      className="input-field"
                      value={selectedCountryId}
                      onChange={handleCountryChange}
                      required
                    >
                      <option value="">Выберите страну</option>
                      {countries.map(country => (
                        <option key={country.idCountry} value={country.idCountry}>
                          {country.countryname}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p>
                    <select
                      className="input-field"
                      value={selectedCityId}
                      onChange={handleCityChange}
                      required
                      disabled={!selectedCountryId}
                    >
                      <option value="">Выберите город</option>
                      {filteredCities.map(city => (
                        <option key={city.idCity} value={city.idCity}>
                          {city.cityname}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p>
                    <input
                      placeholder="+7 (999) 999 99 99"
                      className="input-field"
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
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
  );
};

export default Register2;
