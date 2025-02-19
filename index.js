const express = require("express");
const cors = require("cors");
const morgan = require('morgan')

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Test Route
app.get("/", (req, res) => {
  res.send("Hello!");
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution en: http://localhost:${PORT}`);
});
