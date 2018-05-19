import mongoose from 'mongoose';
import bcrypt from  'bcrypt-nodejs';

const Schema = mongoose.Schema;


const CommentSchema = new Schema({
    gameID: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
