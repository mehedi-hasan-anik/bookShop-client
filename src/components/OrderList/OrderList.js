import React, { useContext } from 'react';
import { userContext } from '../../App';

const OrderList = ({event}) => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    return (
        <div className="container">
          <div className="card" style={{padding:'10px',marginTop:'10px'}}>
              <h5>Book Name : {event.bookName}</h5>
              <p> Quantity : {event.quantity}</p>
              <p> Price : ${event.price}</p>
              <p>Order date : {new Date(event.date).toDateString('dd/MM/yyyy')}</p>
          </div>
        </div>
    );
};

export default OrderList;