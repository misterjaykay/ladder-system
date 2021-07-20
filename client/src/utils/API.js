import axios from "axios";

export default {
    getPlayers: function() {
        return axios.get("/api/players")
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    },

    getSubmitMatches: function() {
        return axios.get("/api/matches")
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    },

    saveMatch: function(matchData) {
        return axios.post("/api/matches", matchData)
        .then(res => {
            console.log(res)
            return res;
        })
        .catch(err => {
            console.log(err)
            return err;
        })
    }
}