import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Add from '../Add/Add';
import Manage from '../Manage/Manage';
import './Me.css'



const Me = () => {
    return (

       <div className="container">
           <Router>
                    <nav className="second-nav">
                        <ul>
                                <li>
                                    <Link to="/manage" style={{ fontSize:'20px'}}>Manage Books</Link>
                                </li>
                                <li>
                                <Link to="/addBooks" style={{ fontSize:'20px'}}>Add Books</Link>
                                </li>
                                <li>
                                <Link to="/me" style={{ fontSize:'20px'}}>Edit Book</Link>
                                </li>

                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/addBooks">
                            <Add></Add>
                        </Route>
                        <Route path="/manage">
                            <Manage></Manage>
                        </Route>
                    </Switch>
           </Router>
       </div>
    );
};

export default Me;