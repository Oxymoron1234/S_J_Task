import React, { useState, useEffect } from 'react';
import "./style/Card.css"
import Switch from "react-switch";
import { MdWebStories} from "react-icons/md";
import { BsThreeDotsVertical , BsPencil} from "react-icons/bs";

const Card = (props) => {
    const [checked, setChecked] = useState(props.status);
    const handleChange = nextChecked => {
         setChecked(nextChecked);
         console.log(!(checked));
    };
    const handleEdit = ()=>{
          alert("Sorry! button under maintenance \n Inconvenience caused is deeply regretted ")

    }
    useEffect(() => {

    }, [checked]);

    return <div className="main-container" id={`"section${props.fid}"`}>
        <div >
            <div className={ (checked) ? 'room': 'darkroom'}>
                <div className='bed1' > <div className="bedImg" > <MdWebStories/> </div> <div> CardiacOT 1</div> </div>
                <div className='bed '><div>Set Temp</div> <div> {props.SetTemp}<BsPencil className="pen" /> </div>  </div> 
                <div className='bed'><div>Supply Air Temp</div><div>{props.SupplyAirtemp}</div></div>
                <div className='bed'><div>Area Temp</div><div>{props.Areatemp}</div></div>
                <div className='bed'><div>Area Humidity</div><div>{props.areaHumidity}%</div></div>
                <div className='bedlast'><div>Status</div> <div> <Switch onChange={handleChange} checked={checked} /></div> </div>
                <div className='bedlast editButton' onClick={handleEdit} ><div> <BsThreeDotsVertical/></div></div>
            </div>
        </div>
    </div>;
};

export default Card;
