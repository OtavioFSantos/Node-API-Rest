import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const router = express.Router();

router
  .get("/authors", AuthorController.listAuthors)
  .get("/authors/:id", AuthorController.listAuthorById)
  .post("/authors", AuthorController.addAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("authors/:id", AuthorController.deleteAuthor);

export default router;
