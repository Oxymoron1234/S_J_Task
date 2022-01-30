import React, { useState, useEffect } from 'react';
import "./style/RightCard.css"
import OutDoorData from "../../data/outdoor.json"
import { BsThreeDotsVertical} from "react-icons/bs";
import { RiDatabaseLine } from "react-icons/ri";
const RightCard = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
        setData(OutDoorData)

    }, []);
    return <>
        
        {
            data.map((out, id) => {
                return (
                    <div key={id}  className="rightChidld" >
                        <div className='box-main'>
                            <h4 className="heading">Outdoor Units  </h4>
                            <div className='box'>
                                <div className='editAndOff' > <div className='off' > Defrost: {out.Defrost} </div> <div className='threeDot' ><BsThreeDotsVertical/></div>  </div> 
                                <div className='module'>{out.error}</div>
                                <div className='vrf'>
                                    <div>{out.VRF.map((vrf ,id) => (
                                       <div className='vrfObj' key={id} >
                                        <div className='vrfRap' > <div className='vrfImg' > <RiDatabaseLine/> </div>
                                         <div> VRF {vrf} </div> </div>
                                       </div>
                                    ))
                                    }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </>;
};

export default RightCard;
