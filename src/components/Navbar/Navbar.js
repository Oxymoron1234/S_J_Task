import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  return <>
	<input type="checkbox" id="check"/>
	<nav>
		<div className="icon">Ass <b style={{color:"red"}}>N</b>T</div>
		<div className="search_box">
			<span className="fa fa-search"></span>
			<input type="search" placeholder="Search"/>
		</div>
		<ol>
			<li><a href="/"><i className="fa fa-building"/></a></li>
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


