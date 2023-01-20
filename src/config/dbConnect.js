import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://otavio:05052001ofs@clusternode.l4bmjma.mongodb.net/?"
);

let db = mongoose.connection;

export default db;
