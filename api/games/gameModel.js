import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: String,
  name: String,
  description: String,
  imageurlsmall:String,
  imageurlbig:String,
  reviewurl:String,
  rating:String
});

export default mongoose.model('Game', GameSchema);
