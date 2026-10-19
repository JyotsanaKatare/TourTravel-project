
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Shri Sawariya Tour & Travel API is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
