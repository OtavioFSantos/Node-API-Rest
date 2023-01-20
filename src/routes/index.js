import express from "express";
import books from "./booksRoutes";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Node" });
  });

  app.use(express.json(), books);
};

export default routes;
