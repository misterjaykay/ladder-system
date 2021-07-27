import axios from "axios";

export default {
    getPlayers: function() {
        return axios.get("/api/players")
        .then(res => {
            console.log('result', res);
            return res;
        })
        .catch(err => {
            console.log('error', err);
        })
    },

    getSubmitMatches: function() {
        return axios.get("/api/matches")
        .then(res => {
            console.log('result', res);
            return res;
        })
        .catch(err => {
            console.log('error', err);
        })
    },

    saveMatch: function(matchData) {
        return axios.post("/api/matches", matchData)
        .then(res => {
            console.log('result', res);
            return res;
        })
        .catch(err => {
            console.log('error', err);
        })
    },

    confirmMatch: function(matchId) {
        return axios.put("/api/matches/" + matchId)
        .then(res => {
            console.log('result', res);
            return res;
        })
        .catch(err => {
            console.log('error', err);
        })
    },

    eloRate: function(matchId) {
        return axios.put("/api/players/" + matchId)
        .then(res => {
            console.log('result', res);
            return res;
        })
        .catch(err => {
            console.log('error', err);
        })
    }
}