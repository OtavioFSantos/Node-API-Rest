import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static listAuthorById = (req, res) => {
    const id = req.params.id;
    findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: "Author not found" });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static addAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - error while adding Author` });
      } else {
        res.status(200).send(Author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - error while updating Author` });
      } else {
        res.status(200).send({ message: "Author successfully updated" });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - error while deleting Author` });
      } else {
        res.status(200).send({ message: "Author successfully deleted" });
      }
    });
  };
}

export default AuthorController;
