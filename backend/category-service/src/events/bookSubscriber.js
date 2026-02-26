const { createClient } = require("redis");

const subscriber = createClient({
  url: "redis://127.0.0.1:6379"
});

subscriber.on("error", (err) =>
  console.error("Redis Subscriber Error:", err)
);

(async () => {
  await subscriber.connect();
  console.log("Redis Subscriber Connected (Category Service)");

  await subscriber.subscribe("BOOK_CREATED", (message) => {
    const book = JSON.parse(message);

    console.log("📘 BOOK_CREATED Event Received in Category Service:");
    console.log("New Book:", book.title);

  });
})();