import axios from 'axios';

export const getAll = async () => {
   const resp = await axios('/api/games')
   return resp.data;
};

export const getByID = gameId => {
    return axios.get(`/api/games/${gameId}`)
                .then(resp => resp.data);
  };