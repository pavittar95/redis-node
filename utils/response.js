const successAction = (data, message = "OK") => {
  return { statusCode: 200, data, message };
};

const failAction = (message = "Fail", statusCode = 400) => {
  return { statusCode, data: null, message };
};

module.exports = {
  successAction,
  failAction,
};
