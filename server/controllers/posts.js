const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage.js");

exports.getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    // DB-uma save anum
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};
