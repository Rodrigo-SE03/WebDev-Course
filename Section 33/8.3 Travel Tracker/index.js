import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "EvoDB",
  port: 5433,
});

db.connect();

const app = express();
const port = 3000;

let countries = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  let result = await db.query("SELECT country_code FROM visited_countries");
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  res.render("index.ejs", { countries: countries ,total: countries.length});
  db.end();
});

app.post("/add", async (req, res) => {
  let country = req.body.country.trim();
  let newCountry = await db.query('SELECT country_code FROM countries WHERE country_name = $1', [country]);
  console.log(newCountry.rows);
  if (newCountry.rows.length > 0) {
    await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [country]);
  }
  let result = await db.query("SELECT country_code FROM visited_countries");
  countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  res.render("index.ejs", { countries: countries ,total: countries.length});  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
