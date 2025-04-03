const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const todo = require("./routes/todoRoute");
const user = require("./routes/userRoute");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", todo);
app.use("/api", user);

app.listen(3300, () => {
  console.log("Started at http://localhost:3300");
});