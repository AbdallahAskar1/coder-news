import express from "express";
import { createPostController, listPostsController } from './controller/post.controller';
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("hello world");
});

app.get("/posts", listPostsController)
app.post("/posts", createPostController)

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
