import axios from "axios";

export default {
    getSubmitMatches: function() {
        return axios.get("/api/matches");
    },

    saveMatch: function(matchData) {
        return axios.post("/api/matches", matchData)
    }
}