const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const DB = process.env.MONGODB_URI;

mongoose
  .connect(DB)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => {
    console.error(err);
    process.exit();
  });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
