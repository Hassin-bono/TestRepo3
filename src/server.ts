import express from "express";
import { requestValidationMiddleware } from "./middleware";
import userRoutes from "./routes/userRoutes";
import { logInfo } from "./utils/logger";

const app = express();
app.use(express.json());
app.use(requestValidationMiddleware);
app.use("/api", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  logInfo(`Server running on port ${PORT}`);
});
