import Axios from "axios";


const baseUrl = "https://word-race-game.herokuapp.com"
// const baseUrl = "http://127.0.0.1:8000"


export const addStat = (payload) => {
    return Axios({
      method: "POST",
      url: `${baseUrl}/api/game/stat/`,
      data: payload,
    });
  };


export const getLeaderboardData = () => {
  return Axios({
    method: "get",
    url: `${baseUrl}/api/game/stat/`,
  });
};


export const getWordsdata = () => {
  return Axios({
    method: "get",
    url: `${baseUrl}/api/words/words/`,
  });
};