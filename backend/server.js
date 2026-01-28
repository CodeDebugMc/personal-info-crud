import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import personRoutes from "./routes/personRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/api/persons", personRoutes);

app.listen(PORT, () => {
  console.log(`htttp://localhost:${PORT}`);
});
