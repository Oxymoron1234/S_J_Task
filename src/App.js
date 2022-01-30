import './App.css';
import MainBody from './components/main/MainBody';
import  Navbar  from './components/Navbar/Navbar';
import React,{useState, useEffect} from 'react'
function App() {
  const [buildingNumber, setBuildingNumber] = useState(1);
  useEffect(() => {
    // console.log(buildingNumber);
  }, [buildingNumber]);
  
  return (
    <>
      <Navbar setBuildingNumber={setBuildingNumber} />
      <MainBody buildingNumber= {buildingNumber} />
    </>
  );
}

export default App;
