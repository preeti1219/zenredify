const { createClient } = require("redis");

const publisher = createClient();
const subscriber = createClient();

publisher.connect();
subscriber.connect();

publisher.on("error", (err) => console.error("Redis Publisher Error:", err));
subscriber.on("error", (err) => console.error("Redis Subscriber Error:", err));

module.exports = {
  publisher,
  subscriber
};