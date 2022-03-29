const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const database = require("./database");
// Соединение к mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log(`Database could't be connected to: ${error}`);
    }
  );
const studentAPI = require("./routes/student.route");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
// API
app.use("/api", studentAPI);
// Создание порта
const port = process.env.PORT || 4000;
// const server = app.listen(port, () => {
//     console.log('Connected to port ' + port)
// })
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
//  404
app.use((req, res, next) => {
  next(createError(404));
});
// обработка ошибок
app.use((err, req, res) => {
  console.error(err.message);
  if (!err.statusCode) return 500;
  return res.status(err.statusCode).send(err.message);
});
