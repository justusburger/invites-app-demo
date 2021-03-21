import express from "express";
import bodyParser from "body-parser";
import seedRoutes from "./routes/seed";
import jobsRoutes from "./routes/jobs";
import categoriesRoutes from "./routes/categories";
import suburbsRoutes from "./routes/suburbs";
import contactsRoutes from "./routes/contacts";

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/api/seed", seedRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/suburbs", suburbsRoutes);
app.use("/api/contacts", contactsRoutes);

export default app;
