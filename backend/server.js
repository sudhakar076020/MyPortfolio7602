require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/portfolio-contact", contactRoutes);

// test
app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
