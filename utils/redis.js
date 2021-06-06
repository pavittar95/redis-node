const REDIS = require("async-redis");

class Redis {
  constructor(options) {
    this.client = REDIS.createClient(options);
    this.client.on("error", (error) => {
      console.error("info", error.toString(), { error });
    });
  }
}

module.exports = new Redis({
  host: "127.0.0.1",
  port: 6379,
});
