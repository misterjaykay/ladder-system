import React, { useState, useEffect } from "react";

export default function Submit() {
    const [ data, setData ] = useState({
        matchId: "",
        winner: "",
        loser: "",
        map: "",
        imgLink: "",
        isAdmin: false
    });

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
        } else {
            setData({...data, map: value});
        }

        console.log(data);
    };

    return (
        <div>
            <h1>Submit Page</h1>
            <p>{data.winner} vs {data.loser} on {data.map}</p>
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

                <label htmlFor="map">Map:</label>

                <select id="map" onChange={handleSelect}>
                    <option value="none">-----</option>
                    <option value="fs">Fighting Spirit</option>
                    <option value="python">Python</option>
                </select>

                <label htmlFor="imgLink">Please share a screenshot for match</label>
                <input type="text" id="imgLink" placeholder="Your link here" onChange={handeInputChange}></input>

                <input type="submit" value="Submit"></input>
            </form>
        </div>
  );
}
