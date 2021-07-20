import React, { useEffect, useState } from 'react';
import API from '../utils/API';

export default function Admin() {
    const [ state, setState ] = useState({
        matches: []
    })

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
    }

    return(
        <div>
            <h1>Admin Page</h1>
            <ul>
            {state.matches.map(e => 
                <li>
                    <h5>{e.matchId}</h5>
                    <p>{e.winner} &#40;{e.winnerRace}&#41; vs {e.loser} &#40;{e.loserRace}&#41;</p>
                    <p>{e.winner} Won.</p>
                    <p>Confirmed by Admin? : {JSON.stringify(e.isAdmin)}</p>
                </li>
            )}
            </ul>
        </div>
    )
}