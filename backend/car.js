const getCar = (req, res, next) => {
  console.log("GET CAR");
};

const postCar = (req, res, next) => {
  console.log("POST CAR");
};

module.exports = { getCar, postCar };
