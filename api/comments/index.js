import express from 'express';
import Comment from './commentModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line



// get comment
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const comments = await Comment.find({gameID: id});
  return res.send({comments});
}));

// add comment
router.post('/add', asyncHandler(async (req, res) => {
  const newComment = new Comment({
      gameID: req.body.gameID,
      username: req.body.username,
      text: req.body.text
    });
    console.log(newComment);
    // save the comment
    var resp = await newComment.save();
    console.log(resp);
    return res.status(201).send({success: true, msg: 'Comment saved'});
}));






/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;