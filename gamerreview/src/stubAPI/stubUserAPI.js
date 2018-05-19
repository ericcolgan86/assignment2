import axios from 'axios';

export const login = async (u, p) => {
    const resp = await axios.post('/api/users/login', { username: u, password: p });
    return resp.data;
  };

export const add = async (u, p) => {
    const resp = await axios.post('/api/users/register', { username: u, password: p });
    return resp.data;
};


        // login(u,p) {
        //      let user = _.find(this.users, function(user) { return user.username === u && user.password === p; })
        //      if (user !== undefined)
        //      {
        //         session.setSession(true);
        //         session.setUser(user.username);
        //         return true;
        //      }
        //      return "Login Failed";
        // }

        // add(u,p) {
        //     let user = _.find(this.users, function(user) { return user.username === u})
        //     if(!user)
        //     {
        //         let len = this.users.length;
        //     let newLen = this.users.push({
        //         username: u, password: p });
        //     return newLen > len ;
        //     }
        //     else
        //     {
        //         return "Username Already exists"
        //     }
            
        // }
