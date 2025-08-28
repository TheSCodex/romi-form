import express from "express";
import bodyParser from "body-parser";
import path from "path";
import userRoutes from "./routes/user";
import expressLayouts from "express-ejs-layouts";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");

app.use("/", userRoutes);

app.get("/", (req, res) => res.redirect("/register"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});