import React, { useState, useEffect } from 'react';
import "./style/Card.css"
import Switch from "react-switch";
import { MdWebStories} from "react-icons/md";
const Card = (props) => {
    const [checked, setChecked] = useState(true);
    const handleChange = nextChecked => {
         setChecked(nextChecked);
         console.log(!(checked));
    };
    useEffect(() => {

    }, [checked]);

    return <div className="main-container" id={`"section${props.fid}"`}>
        <div >
            <div className={ (checked) ? 'room': 'darkroom'}>
                <div className='bed1' > <div className="bedImg" > <MdWebStories/> </div> <div> CardiacOT 1</div> </div>
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
