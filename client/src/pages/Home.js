import React, { useContext, useEffect } from 'react';
import DataContext from '../utils/DataContext';
import Icon from "../components/Icon";
import "./Home.css"

export default function Home() {
    const context = useContext(DataContext);
    return(
        <>
            <div>
                <h1>Rank Section</h1>
                <table>
                    <tr>
                        <th>Rank</th>
                        <th></th>
                        <th>UserName</th>
                        <th>Rating</th>
                        <th>Stats</th>

                        <th>Win Percentage</th>
                    </tr>
                    {context.map(e => 
                    <tr>
                        <td></td>
                        <td><Icon value={e.rating}/></td>
                        <td>{e.name}</td>
                        <td>{e.rating}</td>
                        <td>{e.wins} - {e.losses}</td>
                        <td>{Math.floor(e.wins / (e.wins + e.losses) * 10000) / 100}%</td>
                    </tr>
                        )}
                </table>
            </div>
            {/* <div>
                <h1>Map Section</h1>
                <div>
                    <img src="./assets/images/maps/400px-Python.jpg" alt="python" />
                    <table>
                        <th>Zerg vs Terran</th>
                        <th>Terran vs Protoss</th>
                        <th>Protoss vs Zerg</th>
                    </table>
                </div>
                <div>
                    <img src="./assets/images/maps/400px-Fighting_Spirit_sc.jpg" alt="fs" />
                    <table>
                        <th>Zerg vs Terran</th>
                        <th>Terran vs Protoss</th>
                        <th>Protoss vs Zerg</th>
                    </table>
                </div>
            </div> */}
        </>
    )
}