import React,{useState, useEffect} from 'react';
import "./Navbar.css"
import JsonData from "../../data/indorPoss.json"
import Loader from "../Loader.js"
import { BsBuilding } from "react-icons/bs";
const Navbar = ({setBuildingNumber}) => {
  const [noOfBuilding, setNoOfBuilding] = useState(0);
  const [searchWord, setSearchWord] = useState('');
  const captureId = (e)=>{
    if(e.target.value == 0){
      setBuildingNumber(e.target.value)
      setNoOfBuilding(e.target.value)
    }else{
      //console.log(e.target.value);
      setNoOfBuilding(e.target.value-1)
      setBuildingNumber(e.target.value-1)
    }
  }
  const searchFunction =()=>{
      if(searchWord.length >0 ){
        window.find(searchWord)
        
      }
  }
    useEffect(() => {
     if (!noOfBuilding) return <Loader/>
  },[]);
  
  return <>
    <input type="checkbox" id="check" />
    <nav>
      <div className="icon ">
       <div className="btn" >
        
       <select id="Building" onChange={captureId}>
      
       <option value="0"> Select Building</option>
        {
          JsonData.map((e,id)=>(
            <option key={id} value={id+1}>{e.name}</option>
          ))
        }
      </select>
      
      </div>
      </div>
      <div className="search_box">
        <span className="fa fa-search" onClick={ searchFunction } ></span>
        <input type="search" placeholder="Search" value={searchWord} onChange={ e => {if(e.keyPress === 'Enter'){ return searchFunction } setSearchWord(e.target.value)} } />
      </div>
      <ol>
        <li><a href="/"> <BsBuilding/> </a></li>
      </ol>
      <label htmlFor="check" className="bar">
        <span className="fa fa-bars" id="bars"></span>
        <span className="fa fa-times" id="times"></span>
      </label>
    </nav>
    <section></section>
  </>
};

export default Navbar;


