import userModel from './api/users/userModel';

const users = [
    {
        'username': 'Eric86',
        'password': 'Eric86'
    },

    {
        'username': 'Mick87',
        'password': 'Mick87'
    }
] ; 

export const loadUsers = () => {
    userModel.find({}).remove(() => {
        userModel.collection.insert(users, (err, docs)=>{
    if (err) {
      console.log(`failed to Load User Data: ${err}`);
    } else {
      console.info(`${users.length} users were successfully stored.`);
    }
  });
});
};