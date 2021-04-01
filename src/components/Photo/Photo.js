import React from 'react';
import { useHistory } from 'react-router';
import './Photo.css'

const Photo = ({event}) => {
    const history = useHistory();
    const handleCheckOut = id =>{
        history.push(`/checkout/${id}`);
    }
    return (
        <div className="container card card-area">
            <img style={{width:'100%'}} src={event.imageURL} alt=""/>
             <h5>{event.name}</h5>
             <h6>${event.price}</h6>
             <p>{event.author}</p>
             <button onClick={()=>handleCheckOut(event._id)}>Buy Now</button>
        </div>
    );
};

export default Photo;