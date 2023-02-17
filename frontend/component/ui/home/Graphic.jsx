import React from "react";
import Chart from "react-google-charts";

/*
 * Graphic: Imprime un grafico de barras con las marcas y cantidad
 * de registros de dicha marca
 */
const Graphic = ({ brands }) => {
  const _brands = Object.keys(brands);
  /* Datos de grafico */
  let data = [];
  if (_brands.length) {
    data = Object.keys(brands).map((brand) => [brand, brands[brand]]);
  } else {
    data = [["", 0]];
  }

  return (
    <div className="graphic">
      <Chart
        chartType="ColumnChart"
        data={[["Marca", "Marca"], ...data]}
        options={{
          title: "Estadistica de registro de marcas de coches",
          pointSize: 1,
        }}
      />
    </div>
  );
};

export default Graphic;
