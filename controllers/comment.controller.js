const Validator = require("fastest-validator");
const Post = require("../models/post"); // Added
const User = require("../models/user"); // Added

function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
    userId: 1,
  };

  const schema = {
    title: { type: "string", optional: false, max: "100" },
    content: { type: "string", optional: false, max: "500" },
    categoryId: { type: "number", optional: false },
  };

  const v = new Validator();
  const validationResponse = v.validate(post, schema);

  if (validationResponse !== true) {
    return res
      .status(400)
      .json({ message: "Validation Failed", errors: validationResponse });
  }

  Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function show(req, res) {
  const id = req.params.id;
  Post.findByPk(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json("Post not available");
      }
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json("Something went wrong");
    });
}

function index(req, res) {
  Post.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json("Something went wrong");
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedPost = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
  };
  const userId = 1;

  const schema = {
    title: { type: "string", optional: false, max: "100" },
    content: { type: "string", optional: false, max: "500" },
    categoryId: { type: "number", optional: false },
  };

  const v = new Validator();
  const validationResponse = v.validate(updatedPost, schema);

  if (validationResponse !== true) {
    return res
      .status(400)
      .json({ message: "Validation Failed", errors: validationResponse });
  }

  Post.update(updatedPost, { where: { id: id, userId: userId } })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Post Updated success", post: updatedPost });
    })
    .catch((error) => {
      res.status(500).json({ message: "Something went wrong", error: error });
    });
}

function destroy(req, res) {
  const id = req.params.id;
  const userId = 1;
  Post.destroy({ where: { id: id, userId: userId } })
    .then((result) => {
      if (result === 0) {
        return res
          .status(404)
          .json({ message: "Post not available or unauthorized" });
      }
      res.status(200).json({ message: "Post deleted success" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Something went wrong", error: error });
    });
}

module.exports = { save, show, index, update, destroy };
