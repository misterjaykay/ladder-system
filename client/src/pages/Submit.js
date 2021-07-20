import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { v4 as uuidv4 } from 'uuid';

export default function Submit() {
    const [ data, setData ] = useState({
        matchId: "",
        winner: "",
        winnerRace: "",
        loser: "",
        loserRace: "",
        map: "",
        imgLink: "",
        isAdmin: false
    });

    const [error, setError] = useState(
        {
          email: "",
          password: ""
        }
      );

    const handeInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, imgLink: value});
    }

    const handleSelect = e => {
        const name = e.target.id;
        const value = e.target.value;

        if (name === "playerOne") {
            setData({...data, winner: value});
        } else if (name === "playerTwo") {
            setData({...data, loser: value});
        } else if (name === "pOneRace") {
            setData({...data, winnerRace: value});
        } else if (name ==="pTwoRace") {
            setData({...data, loserRace: value});
        } else {
            setData({...data, map: value});
        }

        console.log(data);
    };

    // future use
    // props.history.push("/home");

    // this needs to be fixed
    const handleMatchSave = (e) => {
        e.preventDefault();
        
        const id = uuidv4(); 
    
        API.saveMatch({
          matchId: id,
          winner: data.winner,
          winnerRace: data.winnerRace,
          loser: data.loser,
          loserRace: data.loserRace,
          map: data.map,
          imgLink: data.imgLink
        }).then(res => console.log(res))
        .catch(err => console.log(err));

        // if (res.data.user !== undefined) {
        //     userHasAuthenticated(true);
        //     setUserId(res.data.user);
        //     props.history.push("/home");
        //   } else {
        //     if (res.data.errors.email !== "") {
        //       setError({...error, email: res.data.errors.email});
        //       await new Promise((resolve, reject) => setTimeout(resolve, 1500));
        //       setError({...error, email: ""});
        //     } 
        //     if (res.data.errors.password !== "") {
        //       setError({...error, password: res.data.errors.password});
        //       await new Promise((resolve, reject) => setTimeout(resolve, 1500));
        //       setError({...error, password: ""});
        //     }
        //   }
      };

    return (
        <div>
            <h1>Submit Page</h1>
            <p>{data.winner}{data.winnerRace} vs {data.loser}{data.loserRace} on {data.map}</p>
            <form>
                <label htmlFor="playerOne">Winner</label>
                <select id="playerOne" onChange={handleSelect}>
                    <option value="none">-----</option>
                    <option value="rp">Red Propaganda</option>
                    <option value="kuto">Kuto</option>
                    <option value="harrykim">Harrykim</option>
                    <option value="rikimaru">Rikimaru</option>
                    <option value="rekay">Rekay</option>
                    <option value="rekuel">Rekuel</option>
                    <option value="ramen">Jjinramen</option>
                </select>

                <label htmlFor="pOneRace">Winner Race</label>
                <select id="pOneRace" onChange={handleSelect}>
                  <option value="none">-----</option>
                  <option value="terran">Terran</option>
                  <option value="zerg">Zerg</option>
                  <option value="protoss">Protoss</option>
                </select>

                <label htmlFor="playerTwo">Loser</label>
                <select id="playerTwo" onChange={handleSelect}>
                    <option value="none">-----</option>
                    <option value="rp">Red Propaganda</option>
                    <option value="kuto">Kuto</option>
                    <option value="harrykim">Harrykim</option>
                    <option value="rikimaru">Rikimaru</option>
                    <option value="rekay">Rekay</option>
                    <option value="rekuel">Rekuel</option>
                    <option value="ramen">Jjinramen</option>
                </select>

                <label htmlFor="pTwoRace">Winner Race</label>
                <select id="pTwoRace" onChange={handleSelect}>
                  <option value="none">-----</option>
                  <option value="terran">Terran</option>
                  <option value="zerg">Zerg</option>
                  <option value="protoss">Protoss</option>
                </select>

                <label htmlFor="map">Map:</label>
                <select id="map" onChange={handleSelect}>
                    <option value="none">-----</option>
                    <option value="fs">Fighting Spirit</option>
                    <option value="python">Python</option>
                </select>

                <label htmlFor="imgLink">Please share a screenshot for match</label>
                <input type="text" id="imgLink" placeholder="Your link here" onChange={handeInputChange}></input>

                <button onClick={handleMatchSave}>Submit</button>
            </form>
            {(error.email !== "") ? (<h3>
              {error.email}
            </h3>) : (<div></div>)}
            {(error.password !== "") ? (<h3>
              {error.password}
            </h3>) : (<div></div>)}
        </div>
  );
}
