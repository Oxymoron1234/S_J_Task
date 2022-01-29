import React,{useState, useEffect} from 'react';
import Card from './Card';
import Data from "../../data/indorPoss.json"
const MainBody = () => {
    const [data, setData] = useState([])
    const getCovidData =  () => {
        try {
            
            let jsonResult = JSON.stringify(Data)
            console.log(jsonResult)
            setData(jsonResult)
           

        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
        getCovidData();
    }, [])
  return <>
        {
            
        }
        <Card/>
  </>;
};

export default MainBody;
