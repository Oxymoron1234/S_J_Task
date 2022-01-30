import React,{useState, useEffect} from 'react';
import "./Navbar.css"
import JsonData from "../../data/indorPoss.json"
import Loader from "../Loader.js"
const Navbar = ({setBuildingNumber}) => {
  const [noOfBuilding, setNoOfBuilding] = useState(0);
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
  useEffect(() => {
     if (!noOfBuilding) return <Loader/>
  },[]);
  
  return <>
    <input type="checkbox" id="check" />
    <nav>
      <div className="icon">
      <select id="Building" onChange={captureId}>
      <option value="0">Select Building</option>
        {
          JsonData.map((e,id)=>(
            <option key={id} value={id+1}>{e.name}</option>
          ))
        }
      </select>
      </div>
      <div className="search_box">
        <span className="fa fa-search"></span>
        <input type="search" placeholder="Search" />
      </div>
      <ol>
        <li><a href="/"><i className="fa fa-home" /></a></li>
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


