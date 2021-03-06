import React, { useEffect, useState } from 'react';
import API from '../utils/API';

export default function Admin() {
    const [ state, setState ] = useState({
        matches: []
    });

    useEffect(() => {
        getSubmitMatches();
    },[])

    const getSubmitMatches = () => {
        API.getSubmitMatches()
        .then(res => {
            console.log(res.data)
            setState({...state, matches: res.data})
        })
        .catch(err => console.log(err))
    };

    const eloRate = (e) => {
        console.log("hi", e)
        API.eloRate(e)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const confirmMatch = (e) => {
        const { value } = e.target;
        API.confirmMatch(value)
        .then(res => {
            console.log("confirmMatch", (res))
            eloRate(value);
        })
        .catch(err => console.log(err))
    };

    return(
        <div>
            <h1>Admin Page</h1>
            <ul>
            {state.matches.map(e => 
                <li key={e.matchId}>
                    <h5>Match ID: {e.matchId}</h5>
                    <p>{e.winnerName} &#40;{e.winnerRace.charAt(0).toUpperCase()}&#41; vs {e.loserName} &#40;{e.loserRace.charAt(0).toUpperCase()}&#41;</p>
                    <p>{e.winnerName} Won.</p>
                    <p>Confirmed by Admin? : {JSON.stringify(e.isAdmin)}</p>
                    <button value={e._id} onClick={confirmMatch}>Click to Confirm</button>
                </li>
            )}
            </ul>
        </div>
    )
}