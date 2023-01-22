import express from "express";
import books from "./booksRoutes";
import authors from "./authorsRoutes";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Node" });
  });

  app.use(express.json(), books, authors);
};

export default routes;
