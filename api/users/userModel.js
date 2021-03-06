import mongoose from 'mongoose';
import bcrypt from  'bcrypt-nodejs';

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {
        type: String,
        unique: true,
        required: true,
    },
  password: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', function(next) {
    const user = this;
    console.log(`usermodelnext ` + next);
    console.log(`usermodel ` + user);
    if (user.isModified('password') || user.isNew) {
        bcrypt.genSalt(10, (err, salt)=> {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, (err, hash)=> {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    console.log(`comparepass userModel` + this);
    bcrypt.compare(passw, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
