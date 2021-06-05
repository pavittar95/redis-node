const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  const payload = "FASTER app which uses less BANDWIDTH too...";
  res.send(payload.repeat(10000));
});

module.exports = router;
