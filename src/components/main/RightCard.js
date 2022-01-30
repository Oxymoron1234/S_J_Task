import React, { useState, useEffect } from 'react';
import "./style/RightCard.css"
import OutDoorData from "../../data/outdoor.json"
import VrfImg from "../../images/VrfImg.svg"
const RightCard = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
        setData(OutDoorData)

    }, []);
    return <>
        <h4>Outdoor Units</h4>
        {
            data.map((out, id) => {
                return (
                    <div key={id} >
                        <div className='box-main'>
                            <div className='box'>
                                <div className='off'>Defrost: {out.Defrost}</div>
                                <div className='module'>{out.error}</div>
                                <div className='vrf'>
                                    <div>{out.VRF.map((vrf ,id) => (
                                       <div className='vrfObj' key={id} >
                                        <div>  </div>
                                        VRF {vrf} 
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
