import React, { useState, useEffect } from 'react';
import Card from './Card';
import Data from "../../data/indorPoss.json"
import Dataposs from "../../data/indoor.json"
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import Loader from '../Loader.js'
const MainBody = () => {
    const [data, setData] = useState([])
    const getData= () => {
        let jsonResult = JSON.stringify(Dataposs)
        setData(Data)
    }
    useEffect( () => {
        getData();
        //console.log(Dataposs)
       if(data== []) return <Loader/>
        
        
    })
    return <>
        <div className="main-body">
            <div className="leftChild"> <LeftCard /> </div>
            <div className="middleChild"> <Card   /> </div>
            <div className="rightChild"> <RightCard /> </div>
        </div>
    </>;
};

export default MainBody;
