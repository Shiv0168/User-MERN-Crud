const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const DBConnect = require("./Config/DB");

require("dotenv").config();
const port = process.env.PORT;
DBConnect();

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api/user", require("./Routes/User.Routes"));

app.listen(port, () => {
  console.log(`app listen on port : ${port}`);
});
