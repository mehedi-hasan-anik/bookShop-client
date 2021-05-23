import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderList from '../OrderList/OrderList';
import './Orders.css';

const Orders = () => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    const [getData,setGetData]=useState([])

    useEffect(()=>{
        fetch('https://apple-cobbler-26520.herokuapp.com/getOrder?email='+user.email)
        .then(res=>res.json())
        .then(data=>setGetData(data))
    },[])
    console.log(getData);

    return (
        <div className="full-orders-area">
        <div className="container inner-full-orders-area">
            <h1 style={{textAlign:'center'}}>Order List </h1>
            {/* <h3 style={{textAlign:'center'}}>{user.name}</h3> */}
            <div className="row">
                {
                    getData.map(event=> <div className="col-md-4">
                        <OrderList event={event}></OrderList>
                    </div> )
                }
            </div> 
        </div>
        </div>
    );
};

export default Orders;