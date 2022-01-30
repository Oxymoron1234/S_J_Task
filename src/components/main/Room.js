import React, { useEffect, useState } from 'react';
import Card from "./Card.js"
import JsonData from "../../data/indorPoss.json"
const Room = ({ floor, buildingNumber }) => {
    const [room, setRoom] = useState([]);
    useEffect(() => {
        let arr = JsonData[0].B1[0].Room;
        setRoom(arr);
        //console.log(arr);
    })
    return (
        <div>
            <h4>Circuit {JsonData[0].B1[0].fid}</h4>
            <h2>{floor}:Indoor Units</h2>
            {room.map((e, i) => {
                return <Card key={i} 
                        SetTemp = {e.SetTemp}
                        SupplyAirtemp={e.SupplyAirtemp} 
                        Areatemp={e.Areatemp} 
                        areaHumidity={e.AreaHumidity} 
                        status={e.status} />
            })}
        </div>
    );
};

export default Room;
