import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "error"));
db.once("open", () => {
  console.log("Connected to database");
});

const app = express();
app.use(express.json());
routes(app);

app.get("/books/:id", (req, res) => {
  let index = searchBook(req.params.id);
  res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book added successfully.");
});

app.put("/books/:id", (req, res) => {
  let index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.put("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = searchBook(id);
  books.splice(index, 1);
  res.send("Book deleted successfully.");
});

function searchBook(id) {
  return books.findIndex((book) => book.id === id);
}

export default app;
