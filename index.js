const express = require("express");
const cors = require("cors");
const morgan = require('morgan')

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/auth", require('./routes/authentication'));
app.use("/api/users", require('./routes/users'));
app.use("/api/commandes", require('./routes/commandes'));
app.use("/api/produits", require('./routes/produits'));
app.use("/api/ingredients", require('./routes/ingredients'));
app.use("/api/paiements", require('./routes/paiements'));

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution en: http://localhost:${PORT}`);
});
