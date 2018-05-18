import express from 'express';
import Game from './gameModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


// Get all games, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    handleError(res, error.message);
  }
});

// get game
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const game = await Game.findOne({id: id});
  return res.send({game});
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