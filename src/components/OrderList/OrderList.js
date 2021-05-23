import React, { useContext } from 'react';
import { userContext } from '../../App';
import './OrderList.css';

const OrderList = ({event}) => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    return (
        <div className="full-orderlist-area">
        <div className="container">
          <div className=" inner-full-orderlist-area" >
              <h5>Book Name : <span className="orderProductPrice">{event.bookName}</span></h5>
              <p> Quantity : {event.quantity}</p>
              <p> Price : ${event.price}</p>
              <p>Order date : {new Date(event.date).toDateString('dd/MM/yyyy')}</p>
          </div>
        </div>
        </div>
    );
};

export default OrderList;