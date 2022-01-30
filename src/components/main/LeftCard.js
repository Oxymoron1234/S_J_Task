import React,{useState} from 'react';
import "./style/LeftCard.css";
import {Link} from 'react-scroll'
const LeftCard = ({floor , fid}) => {
  const[click,setClick] = useState("");
  const handleClick = (e) => {
    // const select = document.getElementById(fid);
    let x = fid.toString();
    //  select.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //  setClick(fid);
    setClick(`"section${x}"`)
    console.log(click);
          
  }
  return <>
       <div id='left-panel'>
            {   
                <Link className='left-floor' to={click} onClick={handleClick} > <li> {floor}</li></Link>
            }
        </div>
  </>;
};

export default LeftCard;
