import React, { useEffect, useState } from 'react';
import Card from "./Card.js"
import JsonData from "../../data/indorPoss.json"
import DummyData from "../../data/indoor.json"
const Room = ({ floor, buildingNumber }) => {
    const [room, setRoom] = useState([]);
    const sendData= async ()=> {
        let x = Object.values(Object.values(JsonData[buildingNumber])[0])
        for (let index = 0; index < x.length; index++) {
            const element = await Object.values(x[index])[2]
            //console.log(element);
        }
        
        
       
    }
    useEffect(() => {
             sendData()
            let arr = JsonData[buildingNumber].B1[0].Room;
            setRoom(arr);
          console.log(Object.values(Object.values(DummyData)[buildingNumber]));
         
    },[])
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
                        status={e.status}    
                    />
            })}
        </div>
    );
};

export default Room;
