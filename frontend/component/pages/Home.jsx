import React, { useEffect, useState } from "react";
import Filter from "../ui/home/Filter";
import Cars from "../ui/home/Cars";
import Graphic from "../ui/home/Graphic";
import Statistic from "../ui/home/Statistic";
import { API } from "../../util";

/*
 * Home: Pagina de inicio
 */
const Home = () => {
  /* Fecha de hoy */
  const now = new Date();
  const nowDay = now.getDate();
  const nowMonth = ("0" + (now.getMonth() + 1)).slice(-2);
  const nowYear = now.getFullYear();

  const nowDate = nowYear + "-" + nowMonth + "-" + nowDay;

  /* Fecha inicial del filtro */
  const [start, setStart] = useState(nowDate);
  /* Fecha final del filtro */
  const [end, setEnd] = useState("");

  /*
   * handleChangeStart: Cambiar la fecha inicial
   */
  const handleChangeStart = (e) => {
    const date = e.currentTarget.value;
    setStart(date);
  };

  /*
   * handleChangeEnd: Cambiar la fecha final
   */
  const handleChangeEnd = (e) => {
    const date = e.currentTarget.value;
    setEnd(date);
  };

  /* Paginacion */
  const [page, setPage] = useState([1]);
  /*
   * applyFilter: Aplicar filtro
   */
  const applyFilter = () => {
    setPage([1]);
  };

  /* Lista de coches registrados */
  const [cars, setCars] = useState([]);
  /* Marcas disponibles */
  const [brands, setBrands] = useState({});
  useEffect(() => {
    (async () => {
      const params = new URLSearchParams({
        start,
        end,
        page,
      });
      try {
        const res = await fetch(API + "/car?" + params, { method: "GET" });
        const data = await res.json();
        if (data.status === "OK") {
          setCars(data.cars);
          setBrands(data.brands);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page]);

  return (
    <main className="home">
      <section className="home__container">
        <Filter
          start={start}
          end={end}
          onChangeStart={handleChangeStart}
          onChangeEnd={handleChangeEnd}
          applyFilter={applyFilter}
        />
        <Cars cars={cars} />
      </section>
      <Graphic brands={brands} />
    </main>
  );
};

export default Home;
