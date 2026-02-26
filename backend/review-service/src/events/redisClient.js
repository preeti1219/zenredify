const { createClient } = require("redis");

const publisher = createClient({
  url: "redis://127.0.0.1:6379"
});

publisher.on("error", (err) =>
  console.error("Redis Publisher Error:", err)
);

(async () => {
  await publisher.connect();
  console.log("Redis Publisher Connected (Review Service)");
})();

module.exports = publisher;