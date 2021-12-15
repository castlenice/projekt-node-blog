import "dotenv/config.js";
import express from "express";
import authors from "./routes/authors.js";
import recipes from "./routes/recipes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/authors", authors); //benutze den authors endpunkt fuer alles was in /users passieren soll
app.use("/", recipes);


app.get("/", (req, res) =>
  res.send(
    "<h1>Willkommen zu unserer zweiten API.</h1><h2>Das sind die Enpunkte:</h2><p>/users um alle User zu bekommen (get) und um einen neuen User zu kreieren (post)</p><p>/users/id um einen User zu bekommen (get), um einen User zu löschen (delete) und um einen User zu aktualisieren (put)</p>"
  )
);

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
