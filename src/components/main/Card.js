import React, { useState, useEffect } from 'react';
import "./style/Card.css"
import Switch from "react-switch";

const Card = (props) => {
    const [checked, setChecked] = useState(true);
    const handleChange = nextChecked => {
         setChecked(nextChecked);
         console.log(!(checked));
    };
    useEffect(() => {

    }, [checked]);

    return <div className="main-container">
        <div className="car">
            <div className={ (checked) ? 'room': 'darkroom'}>
                <div className='bed' > <div> CardiacOT 1</div> <div> <img className="servericon" src="https://img.icons8.com/ios/50/000000/building.png"/> </div></div>
                <div className='bed'><div>Set Temp</div> <div> {props.SetTemp} </div></div>
                <div className='bed'><div>Supply Air Temp</div><div>{props.SupplyAirtemp}</div></div>
                <div className='bed'><div>Area Temp</div><div>{props.Areatemp}</div></div>
                <div className='bed'><div>Area Humidity</div><div>{props.areaHumidity}%</div></div>
                <div className='bedlast'><div>Status</div> <div> <Switch onChange={handleChange} checked={checked} /></div> </div>
            </div>
        </div>
    </div>;
};

export default Card;
