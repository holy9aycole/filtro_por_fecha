import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../util";

/*
 * Register: Pagina de registro de coche
 */
const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const owner = formData.get("owner");
    const date = formData.get("date");

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brand, model, owner, date }),
    };
    fetch(API + "/car", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") navigate("/");
        else; /* no hacer nanda */
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="register">
      <h1 className="register__title">Registro de coche</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__form__item">
          <label htmlFor="brand" className="register__form__label">
            Marca del coche
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            required
            className="register__form__input"
          />
        </div>
        <div className="register__form__item">
          <label htmlFor="model" className="register__form__label">
            Modelo del coche
          </label>
          <input
            type="text"
            id="model"
            name="model"
            required
            className="register__form__input"
          />
        </div>
        <div className="register__form__item">
          <label htmlFor="owner" className="register__form__label">
            Propietario del coche
          </label>
          <input
            type="text"
            id="owner"
            name="owner"
            required
            className="register__form__input"
          />
        </div>
        <div className="register__form__item">
          <label htmlFor="date" className="register__form__label">
            Fecha de registro
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="register__form__input"
          />
        </div>
        <button className="register__form__button">Registrar</button>
      </form>
    </main>
  );
};

export default Register;
