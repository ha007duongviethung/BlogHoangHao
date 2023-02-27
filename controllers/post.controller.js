const Post = require("../models/post.model");

module.exports = class PostApi {
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find().sort({ status: false });
      res.status(200).json({
        success: false,
        message: "Fetch all post successfully",
        posts,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  static async fetchPostById(req, res) {
    const id = req.params.id;
    try {
      const post = await Post.findOne({_id: id})
      res.status(200).json({
        success: false,
        message: "Fetch post by id successfully",
        post,
      });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error"
        });
    }
  }

  static async fetchPostBySlug(req, res) {
    const slug = req.params.slug;
    try {
      const posts = await Post.find({
        slugId: slug
      }).sort({
        status: false
      });
      res.status(200).json({
        success: false,
        message: "Fetch post by slug successfully",
        posts,
      });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error"
        });
    }
  }

  static async fetchPostByStatus(req, res) {
    const status = req.params.status;
    try {
      const posts = await Post.find({
        status: status
      }).sort({
        status: false
      });
      res.status(200).json({
        success: false,
        message: "Fetch post by status successfully",
        posts,
      });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error"
        });
    }
  }

  static async addNewPost(req, res) {
    const post = req.body;
    if (!post.title)
      res.status(400).json({
        success: false,
        message: "Missing title post"
      });
    if (!post.slugId)
      res.status(400).json({
        success: false,
        message: "Missing title slug"
      });

    try {
      const postOld = await Post.findOne({
        title: post.title,
      });

      if (postOld)
        res.status(400).json({ success: false, message: "Post already" });

      const newPost = new Post({
        title: post.title,
        slugId: post.slugId,
        summary: post.summary,
        thumb: post.thumb,
        content: post.content
      });

      await newPost.save();

      res
        .status(200)
        .json({
          success: true,
          message: "Add post successfully",
          newPost
        });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  // static async updateTodo(req, res) {
  //   const todo = req.body;

  //   try {
  //     const todoUpdate = await Todo.findByIdAndUpdate({ _id: todo._id }, todo);
  //     if (!todoUpdate)
  //       res.status(400).json({ success: false, message: "Todo update failed" });

  //     res.status(200).json({
  //       success: true,
  //       message: "Todo update successfully",
  //       todoUpdate,
  //     });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ success: false, message: "Internal Server Error" });
  //   }
  // }

  // static async deleteTodo(req, res) {
  //   const id = req.params.id;

  //   try {
  //     const todoDelete = await Todo.findByIdAndDelete({ _id: id });
  //     if (!todoDelete)
  //       res.status(400).json({ success: false, message: "Delete todo failed" });

  //     res
  //       .status(200)
  //       .json({ success: true, message: "Delete todo successfully" });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ success: false, message: "Internal Server Error" });
  //   }
  // }
};
