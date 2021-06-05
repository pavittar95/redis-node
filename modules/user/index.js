const { createValidator } = require("express-joi-validation");
const validator = createValidator({ passError: true });

const { addUser } = require("./controller");
const { userSchema } = require("./validators");

const express = require("express");
const app = express();

app.post(
  "/user",
  validator.body(userSchema, {
    joi: { convert: true, allowUnknown: false },
  }),
  addUser
);

module.exports = app;
