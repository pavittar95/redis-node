require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const api = require("./modules");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const { failAction } = require("./utils/response");

const app = express();

// view engine setup
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1", api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// JOI error handler
app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    res
      .status(400)
      .json(failAction(err.error.message.toString().replace(/[\""]+/g, "")));
  } else {
    next(err);
  }
});

// error handler
app.use((err, req, res, next) => {
  console.log(err.message);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
