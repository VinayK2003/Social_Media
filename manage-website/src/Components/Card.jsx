import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import './Card.css'; // Import CSS file for styling

const Card = ({cardname,link,image}) => {
    const navigate=useNavigate();
  return (
    <div className="card">
        <img  src={image} alt="Lago di Braies" style={{ width: '40%' }}></img>


        <div className="card__details">


            
            <div className="name">{cardname}</div>

          <Link to={link} ><button type="submit" >Submit</button></Link>  
        </div>


        
   </div> 
  );
};

export default Card;
