import userModel from './api/users/userModel';

const users = [
    {
        'username': 'Eric86',
        'password': '$2a$10$jeefkZS.X5Fb5YIMxbQ5CO3i3dpKD1FJi1neMuNEoKgU4MGBxtSTq'
    },

    {
        'username': 'Mick87',
        'password': '$2a$10$B0Hfiox97mN2ffZEpvzS1eruouJRRmctaLmVqjGiIEd72YmxIUsqS'
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