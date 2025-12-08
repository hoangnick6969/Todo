import express from 'express';
import taskRoutes from './routes/tasksRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// =======================
// 🟢 ENABLE CORS HERE
// =======================
app.use(
  cors({
    origin: "http://localhost:5173", // FE Vite
    credentials: true,              // nếu sau dùng cookie/auth
  })
);

// =======================
// 🟢 Body parser
// =======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// 🟢 API Routes
// =======================
app.use("/api/tasks", taskRoutes);

// =======================
// 🟢 Start server after DB connected
// =======================
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("🚀 Server is running at http://localhost:5001");
  });
});
