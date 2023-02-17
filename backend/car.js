const { Schema, model } = require("mongoose");
const { randomBytes } = require("crypto");

/* MODELADO DEL COCHE */
const carSchema = new Schema({
  _id: {
    type: String,
    require: [true, "Id de coche requerido"],
  },
  brand: {
    type: String,
    require: [true, "Marca del coche requerido"],
  },
  model: {
    type: String,
    require: [true, "Nombre del coche requerido"],
  },
  owner: {
    type: String,
    require: [true, "Nombre del coche requerido"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Car = model("Car", carSchema);
/* ---  MODELADO DEL COCHE --- */

/* Obtener coches registrados */
const getCar = (req, res, next) => {
  /* Parametros de URL */
  const { start, end } = req.query;

  const _start = start == undefined || start == "" ? undefined : start;
  const _end = end == undefined || end == "" ? undefined : end;

  const filter = {};
  if (_start) {
    filter["$gte"] = new Date(_start).toISOString();
    if (_end == undefined) {
      filter["$lt"] = new Date(
        /* Sumar mas 24 horas a la fecha final para que tome los registros
         * registrados de 00:00:00 de la fecha inicial a 00:00:00 de la fecha final */
        new Date(_start).getTime() + 1000 * 3600 * 24
      ).toISOString();
    }
  }
  if (_end) {
    /* Fechas menores a la fecha final.
     * Si no se especifica la fecha incial se devolvera todos los registros
     * registrados hasta la fecha final (inclusive) */
    filter["$lt"] = new Date(
      /* Sumar mas 24 horas a la fecha final porque las fechas tanto inicial
       * como final tienen el tiempo 00:00:00 y para cubrir todo el dia (inclusive)
       * le sumamos mas 24 horas */
      new Date(_end).getTime() + 1000 * 3600 * 24
    ).toISOString();
  }

  Car.find({
    date: filter,
  })
    .sort({ date: 1 })
    .then((cars) => {
      /* Objeto que contiene como propiedades las marcas registradas */
      const brands = cars.reduce(
        (_brand, car) =>
          _brand.hasOwnProperty(car.brand)
            ? { ..._brand, [car.brand]: _brand[car.brand] + 1 }
            : { ..._brand, [car.brand]: 1 },
        {}
      );

      res.status(200).json({
        status: "OK",
        cars: cars.map((car) => ({
          id: car._id,
          brand: car.brand,
          model: car.model,
          owner: car.owner,
        })),
        brands,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).status({ error: "Error de peticion" });
    });
};

/* Crear coche */
const postCar = (req, res, next) => {
  const { brand, model, owner, date } = req.body;

  /* Id del coche. Usar letras mayusculas */
  const carId = randomBytes(15).toString("hex").toUpperCase();

  /* Modelo de documento del coche a crear */
  const carDoc = new Car({
    _id: carId,
    brand,
    model,
    owner,
    date: date || new Date(),
  });

  /* Crear coche */
  carDoc
    .save()
    .then(() => {
      res.status(200).json({ status: "OK" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).status({ error: "Error de peticion" });
    });
};

module.exports = { getCar, postCar };
