import React from 'react'
import "./Generate.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BgImage from "../images/BgImage";
const Generate = () => {
  return (
    // <BgImage>
        <div className='Generatee' >
            <textarea name="" id="" cols="30" rows="10" className='inputbox'></textarea>
            <Button as="a" variant="primary"> Search</Button>
            <textarea name="" id="" cols="30" rows="10" className='outputbox'></textarea>
        </div>
   
    // </BgImage>
  )
}

export default Generate;