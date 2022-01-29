import React,{useState, useEffect} from 'react';
import Card from './Card';
import Data from "../../data/indorPoss.json"
import Dataposs from "../../data/indoor.json"
const MainBody = () => {
    const [data, setData] = useState([])
    const getJsonData =  () => {
        try {
            const jsonResult = JSON.stringify(Dataposs) 
              setData(jsonResult) 
              console.log( Dataposs["1"][0])
        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
        getJsonData()
    }, [])
    
  return <>
        <div className="main-body">
            <div className="leftChild">hello</div>
            <div className ="middleChild"> <Card/> </div>
            <div className="rightChild">hello</div>
        </div>
  </>;
};

export default MainBody;
