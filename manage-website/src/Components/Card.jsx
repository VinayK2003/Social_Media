import React from 'react';
import './Card.css'; // Import CSS file for styling

const Card = ({image,text}) => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lago di Braies" style={{ width: '40%' }}></img>


        <div className="card__details">


            <span className="tag">Nature</span>

            <span className="tag">Lake</span>

            
            <div className="name">Lago di Braies</div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam
                pharetra
                vitae ipsum odio.</p>

            <button>Read more</button>
        </div>


        
   </div> 
  );
};

export default Card;
