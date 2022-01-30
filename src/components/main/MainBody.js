import React, { useState, useEffect } from 'react';
import JsonData from "../../data/indorPoss.json"
import Room from "./Room.js"
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import Loader from '../Loader.js'

const MainBody = ({buildingNumber}) => {
    const [data, setData] = useState([])
    const getData= () => {
        setData(JsonData[buildingNumber].B1)
        
    }
    useEffect( () => {
        getData();
       if(data == []) return <Loader/>  
    })
    return <>
        <div className="main-body">
            <div className="leftChild"> 
                         {data.map((e,i)=>{
                         return <LeftCard key={i} floor={e.floor} fid={e.fid} buildingNumber={buildingNumber} />
                         })} 
              </div>
            <div className="middleChild"> {data.map((e,i)=>{
                         return <Room key={i} floor={e.floor} fid={e.fid} buildingNumber={buildingNumber} />
                         })} 
            </div>
            <div className="rightChild"> <RightCard /> </div>
        </div>
    </>;
};

export default MainBody;
