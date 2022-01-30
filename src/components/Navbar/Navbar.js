import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  const captureId = (e)=>{
    if(e.target.value === 0){
    }else{
      console.log(e.target.value);
    }
  }
  return <>
    <input type="checkbox" id="check" />
    <nav>
      <div className="icon">
      <select id="Building" onChange={captureId}>
      <option value="0">Select Building</option>
        <option value="1">Building 1</option>
        <option value="2">Building 2</option>
      </select>
      </div>
      <div className="search_box">
        <span className="fa fa-search"></span>
        <input type="search" placeholder="Search" />
      </div>
      <ol>
        <li><a href="/"><i className="fa fa-building" /></a></li>
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


