import Comment from "../models/comment.model.js";

export const getPostComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  res.json(comments);
};
export const addComment = async (req, res) => {};
export const deleteComment = async (req, res) => {};
