const { client } = require("../../utils/redis");
const { successAction, failAction } = require("../../utils/response");

module.exports = {
  addUser: async (req, res) => {
    try {
      const data = await client.lpush("users", JSON.stringify(req.body));
      res.json(successAction(data));
    } catch (error) {
      res.json(failAction(error));
    }
  },
  getList: async (req, res) => {
    try {
      const data = await client.lrange("users", 0, -1);
      res.json(successAction(data));
    } catch (error) {
      res.json(failAction(error));
    }
  },
};
