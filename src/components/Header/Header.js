import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    return (
       
        <div className="container">
            <div className="row full-header-area">
                 <div className="col-lg-4 col-md-12 col-sm-12 logo-area">
                      <h1 style={{textAlign:'center'}}>Book Area</h1>
                 </div>
                 <div className="col-lg-8 col-md-12 col-sm-12 nav-area">
                     <div>
                            <nav>
                                <ul>
                                    <li>
                                    <Link to="/home" style={{color:'#fff', fontSize:'20px'}}>Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/orders" style={{color:'#fff', fontSize:'20px'}}>Orders</Link>
                                    </li>
                                    <li>
                                    <Link to="/me" style={{color:'#fff', fontSize:'20px'}}>Admin</Link>
                                    </li>
                                    <li>
                                    <Link to="/deals" style={{color:'#fff', fontSize:'20px'}}>Deals</Link>
                                    </li>
                                    <li>
                                       {
                                           user.name ?  <Link to="/login" style={{color:'#fff', fontSize:'20px'}}>{user.name}</Link> :  <Link to="/login" style={{color:'#fff', fontSize:'20px'}}>Login</Link>
                                       }
                                    </li>
                                </ul>
                          </nav>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Header;