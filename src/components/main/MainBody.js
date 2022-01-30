import React, { useState, useEffect } from 'react';
import JsonData from "../../data/indorPoss.json"
import Room from "./Room.js"
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import Loader from '../Loader.js'
import Card from "./Card.js"

const MainBody = ({buildingNumber}) => {
    const [data, setData] = useState([])
    const getData= () => {
        
        
    }
    useEffect( () => {
        for(let i = 0; i < JsonData[0].length; i++){
            setData([...data,JsonData[i].B1]) 
        }
    },[data])
    useEffect(() => {
        setData(JsonData[buildingNumber].B1)
    },[buildingNumber])
    return <>
        <div className="main-body">
            <div className="leftChild"> 
                         {data.map((e,i)=>{
                         return <LeftCard key={i} floor={e.floor} fid={e.fid} buildingNumber={buildingNumber} />
                         })} 
              </div>
            <div className="middleChild"> {data.map((e,id)=>{
                         return (<>
                         <Room key={id} 
                         floor={e.floor} 
                         fid={e.fid} 
                         buildingNumber={buildingNumber} /></>)
                         })} 
            </div>
            <div className="rightChild"> <RightCard /> </div>
        </div>
    </>;
};

export default MainBody;
