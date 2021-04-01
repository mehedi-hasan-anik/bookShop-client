import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Photo from '../Photo/Photo';
import './Home.css'

const Home = () => {
    // const [allImage,setAllImage]=useState([])
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        fetch('https://apple-cobbler-26520.herokuapp.com/all')
        .then(res=> res.json())
        .then(data=>{
            setAllImage(data)
            setLoading(true)
        })
    },[])

    const homeResult = allImage.filter(event=> event.imageURL);
    
    return (
        
        <div className="container">
           
          {
              loading ?   <div className="row">
              {
                  homeResult.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><Photo event={event}></Photo></div>)
              }
            </div> : <div style={{width:'100px',margin:'0 auto'}}>
            <div class="spinner-border text-primary" role="status">
             <span class="visually-hidden"></span>
            </div>
            </div>
          }
       
       </div>
        
    );
};

export default Home;