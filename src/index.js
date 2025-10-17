import express from "express";
import dotenv from "dotenv";
import methodOverride from "method-override";
import productRoutes from "./routes/productRoutes.js";
import "./config/db.js";
import engine from "ejs-mate";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => res.redirect("/productos"));
app.use("/productos", productRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 SebMay (SSR) corriendo en puerto ${PORT}`)
);
