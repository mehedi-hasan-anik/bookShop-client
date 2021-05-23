import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    return (
       
        <div className="full-nav-area">
        <nav class="navbar navbar-expand-lg   container">
           <div class="container-fluid nav-full-area">
               <a class="navbar-brand" href="#">BookArea</a>
               <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span  class="navbar-toggler-icon">
                      <FontAwesomeIcon icon={faBars} className="nav-bar-icon" />
                   </span>
               </button>
               <div class="collapse navbar-collapse navigation-area" id="navbarSupportedContent">
                   <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                           <Link className="nav-link ms-3" to="/mainHome">Home</Link>
                       </li>
                       <li class="nav-item">
                           <Link className="nav-link ms-3" to="/orders">Orders</Link>
                       </li>
                       <li class="nav-item">
                           <Link className="nav-link ms-3" to="/me">Admin</Link>
                       </li>
                       <li class="nav-item">
                           <Link className="nav-link ms-3" to="/deals">Deals</Link>
                       </li>
                       <li class="nav-item">
                           <Link className="nav-link ms-3" to="/contact">Contact</Link>
                       </li>
                     
                       <li class="nav-item">
                           {
                                   user.name ?  <Link to="/login" className="nav-link ms-3">{user.name}</Link> :  <Link to="/login" className="nav-link ms-3">Login</Link>  
                           }
                       </li>
                      
                   </ul>
               
               </div>
           </div>
     </nav>
     </div>
    );
};

export default Header;