import React,{ useState, useEffect} from 'react';
import "./style/Card.css"
const Card = (props) => {
    useEffect(() => {
       console.log(props.floor);
    }, []);
    
    return <div className="main-container">
        <div className="cards">
        <h4>Circuit</h4>
           <h2>:Indoor Units</h2>
           <div className='room'>
               <div className='bed'>Cardiac OT 1</div>
               <div className='bed'><div>Set Temp</div></div>
               <div className='bed'><div>Supply Air Temp</div><div>20.8 C</div></div>
               <div className='bed'><div>Area Temp</div><div>21.2 C</div></div>
               <div className='bed'><div>Area Humidity</div><div>60%</div></div>
               <div className='bedlast'><div>Status</div><div>True</div></div>
           </div>
        </div>
    </div>;
};

export default Card;
