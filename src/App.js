import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Me from './components/Me/Me';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const userContext = createContext();

function App() {

  const [user,setUser]=useState({
    isSignIn:false,
    name:'',
    photo:'',
    email:'',
  })

  const [allImage,setAllImage]=useState([])

  return (
    <userContext.Provider value={[user,setUser,allImage,setAllImage]}>
        <Router>
           <Header></Header>
             <Switch>

                 <Route path="/home">
                    <Home></Home>
                 </Route>
                 <Route path="/orders">
                    <Orders></Orders>
                 </Route>
                 <Route path="/me">
                    <Me></Me>
                 </Route>
                 <Route path="/deals">
                    <Deals></Deals>
                 </Route>
                 <Route path="/login">
                    <Login></Login>
                 </Route>
                 <PrivateRoute path="/checkout/:idNumber">
                    <CheckOut></CheckOut>
                 </PrivateRoute>
                 <Route exact path="/">
                    <Home></Home>
                 </Route>
                 <Route path="*">
                    <NotFound></NotFound>
                 </Route>

             </Switch>
        </Router>
    </userContext.Provider>
  );
}

export default App;
