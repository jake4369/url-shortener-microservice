const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
