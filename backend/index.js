const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const todo = require("./routes/todoRoute");
const user = require("./routes/userRoute");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", todo);
app.use("/api", user);

app.listen(3300, () => {
  console.log("Started at http://localhost:3300");
});
