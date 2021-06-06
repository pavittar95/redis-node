const { createValidator } = require("express-joi-validation");
const validator = createValidator({ passError: true });

const { addUser, getList } = require("./controller");
const { addUserSchema } = require("./validators");

const express = require("express");
const app = express();

app.post(
  "/user",
  validator.body(addUserSchema, {
    joi: { convert: true, allowUnknown: false },
  }),
  addUser
);

app.get("/user", getList);

module.exports = app;
