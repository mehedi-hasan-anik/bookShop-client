import React from 'react';
import './TopHome.css';
import GirlWithBook from "../image/Untitled-5.png"

const TopHome = () => {
    return (
        <div className="topHomeArea">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                         <img src={GirlWithBook} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center topHomeArea-text">
                      <div>
                         <h5>BACK TO SCHOOL</h5>
                         <h2>SPECIAL <span style={{color:"#007ACC", fontSize:"60px", padding:"10px"}}>50% OFF</span></h2>
                         <h5>FOR OUR STUDENT COMMUNITY</h5>
                         <button>GET THE DEAL</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHome;