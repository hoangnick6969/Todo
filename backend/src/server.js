import express from 'express';
import taskRoutes from './routes/tasksRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const __dirname = path.resolve();
// =======================
// 🟢 ENABLE CORS HERE
// =======================
if (process.env.NODE_ENV === "development") {app.use(
  cors({
    origin: "http://localhost:5173", // FE Vite
    credentials: true,              // nếu sau dùng cookie/auth
  })
);
}

// =======================
// 🟢 Body parser
// =======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// 🟢 API Routes
// =======================
app.use("/api/tasks", taskRoutes);

if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});
}
// =======================
// 🟢 Start server after DB connected
// =======================
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("🚀 Server is running at http://localhost:5001");
  });
});
