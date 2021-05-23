import React from 'react';
import { Link } from 'react-router-dom';

import './Me.css'



const Me = () => {
    return (
        <div className="full-me-area">

       <div className=" inner-full-me-area">
          
                        <ul>
                                <li>
                                    <Link to="/manage" style={{ fontSize:'20px', color:'white'}}>Manage Books</Link>
                                </li>
                                <li>
                                <Link to="/addBooks" style={{ fontSize:'20px', color:'white'}}>Add Books</Link>
                                </li>
                                <li>
                                <Link to="/me" style={{ fontSize:'20px', color:'white'}}>Back</Link>
                                </li>

                        </ul>
                
       </div>
       </div>
    );
};

export default Me;