import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import {loadGames} from './gamesData';
import gamesRouter from './api/games';
import bodyParser from 'body-parser';


dotenv.config();

const app = express();

const port = process.env.PORT;

mongoose.connect(process.env.mongoDB);
// Populate DB with sample data
if (process.env.seedDb) {
  loadGames();
}

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/games', gamesRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
