const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve node_modules/@paypal/paypal-js so ES module imports work in index.html
app.use(
  "/node_modules/@paypal/paypal-js",
  express.static(path.join(__dirname, "node_modules/@paypal/paypal-js"))
);

// Mock /api endpoint (returns a test order ID)
app.get("/api", (req, res) => {
  res.json({ orderId: "0BF55033GG141343V" });
});

// Serve all static HTML/CSS/JS files from the root directory
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
