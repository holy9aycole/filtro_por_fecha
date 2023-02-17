const mongoose = require("mongoose");
const { DATABASE_URL } = require("./config");

mongoose.set("strictQuery", false);

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
