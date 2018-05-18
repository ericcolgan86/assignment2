import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line



// User Login
router.post('/login', asyncHandler(async (req, res) => {
  console.log(`/login`);
    const user = req.body;
    if (user) {
          const userResp = await User.findOne(user);
          if (!userResp) return res.status(201).send({success: false, msg: 'Authentication failed. User not found.'});
          else{
            return res.status(201).send({success: true, msg: 'User authenticated successfully'});
          }        
      } else {
         return handleError(res, err);
      }
}));

// User Register
router.post('/register', asyncHandler(async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
      });
      console.log(newUser);
      // save the user
      var resp = await newUser.save();
      console.log(resp);
      return res.status(201).send({success: true, msg: 'User authenticated successfully'});
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