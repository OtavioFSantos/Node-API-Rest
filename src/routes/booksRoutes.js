import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
  .get("/books", BookController.listBooks)
  .get("/books/:id", BookController.listBookById)
  .post("/books", BookController.addBook)
  .put("/books/:id", BookController.updateBook)
  .delete("books/:id", BookController.deleteBook);

export default router;
