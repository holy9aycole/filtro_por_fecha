import React from "react";
import { Link } from "react-router-dom";

/*
 * Filter: Aplica los filtro para el listado de registros de coche
 *
 * @param start         Valor del filtro inicial
 * @param end           Valor del filtro final
 * @param changeStart   Cambia el valor del filtro inicial
 * @param changeEnd     Cambia el valor del filtro final
 * @param applyFilter   Aplica los filtros en una nueva peticion
 */
const Filter = ({ start, end, onChangeStart, onChangeEnd, applyFilter }) => (
  <div className="filter">
    <div className="filter__container">
      <label htmlFor="start" className="filter__item">
        Fecha inicial:
        <input type="date" id="start" value={start} onChange={onChangeStart} />
      </label>
      <label htmlFor="end" className="filter__item">
        Fecha final:
        <input type="date" id="end" value={end} onChange={onChangeEnd} />
      </label>
      <button className="filter__button" onClick={applyFilter}>
        Aplicar
      </button>
    </div>
    <Link to="/register" className="filter__link">
      Crear registro
    </Link>
  </div>
);

export default Filter;
