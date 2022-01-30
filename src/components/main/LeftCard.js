import React,{useState} from 'react';
import "./style/LeftCard.css";
import {Link} from 'react-scroll'
const LeftCard = ({floor , fid}) => {
  const[click,setClick] = useState("");
  const handleClick = (e) => {
    setClick(`"section${fid}"`)
    if(fid<=3){
       window.scrollTo({top:0, behavior: 'smooth'});
    }else if( fid>3 && fid<=5){
      window.scrollTo({top:200, behavior: 'smooth'});
    }else{
      window.scrollTo({top:document.body.scrollHeight , behavior: 'smooth'});
    }
    

  }
  return <>
       <div id='left-panel'>
            {   
                <button className=' custom-btn btnEffect' value={click} onClick={handleClick} > <span> <li>{floor}</li></span></button>
            }
        </div>
  </>;
};

export default LeftCard;
