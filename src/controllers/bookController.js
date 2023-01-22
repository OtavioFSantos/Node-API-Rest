import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    books
      .find()
      .populate("author")
      .execute((err, books) => {
        res.status(200).json(books);
      });
  };

  static listBookById = (req, res) => {
    const id = req.params.id;
    books
      .findById(id)
      .populate("author", "title")
      .exec((err, books) => {
        if (err) {
          res.status(400).send({ message: "book not found" });
        } else {
          res.status(200).send(books);
        }
      });
  };

  static addBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - error while adding book` });
      } else {
        res.status(200).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - error while updating book` });
      } else {
        res.status(200).send({ message: "book successfully updated" });
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - error while deleting book` });
      } else {
        res.status(200).send({ message: "book successfully deleted" });
      }
    });
  };
}

export default BookController;
