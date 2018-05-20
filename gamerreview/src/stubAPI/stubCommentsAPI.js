import axios from 'axios';

export const getByID = gameId => {
    return axios.get(`/api/comments/${gameId}`)
                .then(resp => resp.data);
  };

export const add = async (gID, u, t) => {
    const resp = await axios.post('/api/comments/add', { gameID: gID, username: u, text: t });
    return resp.data;
};