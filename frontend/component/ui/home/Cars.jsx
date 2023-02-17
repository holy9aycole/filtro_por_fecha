import React from "react";

/*
 * Home: Imprime el listado de coches registrados
 *
 * @param cars    Lsita de coches registrados
 */
const Cars = ({ cars }) => (
  <section className="cars">
    <header className="cars__header">
      <h3 className="cars__header__item">ID</h3>
      <h3 className="cars__header__item">Marca</h3>
      <h3 className="cars__header__item">Modelo</h3>
      <h3 className="cars__header__item">Propietario</h3>
    </header>
    <div className="cars__container">
      {cars.map((car) => (
        <div key={car.id} className="cars__item">
          <span>{car.id}</span>
          <span>{car.brand}</span>
          <span>{car.model}</span>
          <span>{car.owner}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Cars;
