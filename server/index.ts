import express from "express";
import { db } from "./datastore";
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("hello world");
});

app.get("/posts", (_req, res) => {
  res.send(db.listPosts());
});

app.post("/posts", (req, res) => {
  const data = req.body;
  db.createPost(data);
  res.status(201).send("post created successfully");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
