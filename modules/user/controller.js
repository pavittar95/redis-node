module.exports = {
  addUser: (req, res) => {
    console.log(req.body);
    res.send("user login");
  },
};
