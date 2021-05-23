import React from 'react';
import { useHistory } from 'react-router';
import './Photo.css'

const Photo = ({event}) => {
    const history = useHistory();
    const handleCheckOut = id =>{
        history.push(`/checkout/${id}`);
    }
    return (
        <div className="container  cart-area">
            <img style={{width:'100%',height:'400px'}} src={event.imageURL} alt=""/>
             <h5>{event.name}</h5>
             <p>Price: ${event.price}</p>
             <p>{event.author}</p>
             <button onClick={()=>handleCheckOut(event._id)} style={{background:'blue', color:'#fff'}}>Buy Now</button>
        </div>
    );
};

export default Photo;