import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import {loadGames} from './gamesData';
import {loadUsers} from './usersData';
import {loadComments} from './commentsData';
import gamesRouter from './api/games';
import usersRouter from './api/users';
import commentsRouter from './api/comments';
import bodyParser from 'body-parser';


dotenv.config();

const app = express();

const port = process.env.PORT;

mongoose.connect(process.env.mongoDB);
// Populate DB with sample data
// if (process.env.seedDb) {
//   loadGames();
//   loadUsers();
//   loadComments();
// }

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/games', gamesRouter);
app.use('/api/users', usersRouter);
app.use('/api/comments', commentsRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
