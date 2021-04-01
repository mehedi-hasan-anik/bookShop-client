import React from 'react';

const ManageList = ({event}) => {
    const handleDelete = id =>{
        fetch(`http://localhost:5055/delete/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify()
        })
    }
    
    return (
        <div style={{border:'1px solid grey',padding:'10px'}}>
            <h3>Book Name : <span style={{color:'blue'}}>{event.name}</span> </h3>
            <p>Author Name:{event.author}</p>
            <h5>Price:{event.price}</h5>
            <button onClick={()=>handleDelete(event._id)}>Delete</button>
        </div>
    );
};

export default ManageList;