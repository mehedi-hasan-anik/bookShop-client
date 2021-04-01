import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    const [getData,setGetData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5055/getOrder?email='+user.email)
        .then(res=>res.json())
        .then(data=>setGetData(data))
    },[])
    console.log(getData);

    return (
        <div className="container">
            <h1 style={{textAlign:'center'}}>Order List </h1>
            <h3 style={{textAlign:'center'}}>{user.name}</h3>
            <div className="row">
                {
                    getData.map(event=> <OrderList event={event}></OrderList> )
                }
            </div> 
        </div>
    );
};

export default Orders;