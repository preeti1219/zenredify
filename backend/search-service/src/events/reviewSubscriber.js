const { createClient } = require("redis");

const subscriber = createClient({
  url: "redis://127.0.0.1:6379"
});

subscriber.on("error", (err) =>
  console.error("Redis Subscriber Error:", err)
);

(async () => {
  await subscriber.connect();
  console.log("Redis Subscriber Connected (Search Service)");

  await subscriber.subscribe("REVIEW_ADDED", (message) => {
    const review = JSON.parse(message);

    console.log("REVIEW_ADDED Event Received in Search Service:");
    console.log("Book ID:", review.bookId);
  });
})();