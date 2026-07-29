import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", routes);

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

export default app;