import React from 'react';
import './ManageList.css';

const ManageList = ({event}) => {
    console.log(event);
    const handleDelete = id =>{
        fetch(`https://apple-cobbler-26520.herokuapp.com/delete/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify()
        })
    }
    
    return (
        <div className="full-managelist">
            <img src={event.imageURL} alt="" className="img-fluid" />
            <h5>Book Name : <span style={{color:'blue'}}>{event.name}</span> </h5>
            <p>Author Name:{event.author}</p>
            <p>Price: ${event.price}</p>
            <button onClick={()=>handleDelete(event._id)}>Delete</button>
        </div>
    );
};

export default ManageList;