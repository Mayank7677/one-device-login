require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./configs/db");

app.use(express.json());

const PORT = process.env.PORT || 5000;
const userRoutes = require("./src/routes/user.routes");

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the One Device Login API"); 
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
