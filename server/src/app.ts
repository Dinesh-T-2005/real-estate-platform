import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";
import propertyRoutes from "./routes/property.routes";
import propertyImageRoutes from "./routes/propertyImage.routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/properties", propertyRoutes);
app.use("/api/property-images", propertyImageRoutes);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
app.use("/api", routes);

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

export default app;