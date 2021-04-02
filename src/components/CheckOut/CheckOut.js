import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    const {idNumber} = useParams();
    const found = allImage.find(Element => Element._id === idNumber);
    const handleOrder = () =>{
        const order ={
            name:user.name,
            email:user.email,
            bookName:found.name,
            quantity:1,
            price:found.price,
            date: new Date(),
        }

        fetch('https://apple-cobbler-26520.herokuapp.com/addOrder',{
            method:"POST",
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className="container" style={{width:'300px',maxWidth:'100%',marginTop:'20px'}}>

           {
               found && <div>
                   <h5>Name : {found.name}</h5>
               <p>Quantity : 1 </p>
               <p>Price : {found.price}</p>
               <button onClick={handleOrder}>CheckOut</button>
               </div>
           }
         
        </div>
    );
};

export default CheckOut;