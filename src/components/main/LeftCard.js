import React from 'react';
import "./style/LeftCard.css";
const LeftCard = ({floor}) => {
  return <>
       <div id='left-panel'>
            {/* <div className='left-floor'>8th Floor</div>
            <div className='left-floor'>4th Floor</div>
            <div className='left-floor'>2nd Floor</div> */}
            {
                <div className='left-floor'> <li> {floor}</li></div>
            }
        </div>
  </>;
};

export default LeftCard;
