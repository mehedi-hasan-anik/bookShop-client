import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import './Login.css'
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const history = useHistory();
    const location = useLocation();
   const [user,setUser]=useContext(userContext);
   const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogle =()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then(result=> { 
            const user = result.user;
            const {email,photoURL,displayName}=user;
            const signIn ={
                isSignIn: true,
                name: displayName,
                photo: photoURL,
                email: email,
            }
            setUser(signIn);
            history.replace(from);
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
        
    }

    return (
        <div className="container">
            <div className="show-area" style={{width:'300px',margin:'0 auto'}}>
                <button onClick={handleGoogle} style={{marginTop:'20px'}}>Login with google</button>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <img src={user.photo} alt=""/>
           </div>
        </div>
    );
};

export default Login;