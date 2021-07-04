import React, { useEffect, useState } from 'react';

export default function Admin() {
    const [ state, setState ] = useState({
        matches: []
    })

    useEffect(() => {
        getSubmitMatches();
    },[])

    const getSubmitMatches = () => {
        
    }

    return(
        <div>
            <h1>Admin Page</h1>
        </div>
    )
}