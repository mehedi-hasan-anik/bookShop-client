import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Add.css';
import { userContext } from '../../App';

const Add = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL]=useState(null)

    const onSubmit = data => {
        console.log( 'data',data.price);
        const eventData = {
            name:data.name,
            imageURL:imageURL,
            price:data.price,
            author:data.author,
        }
        const url = `https://apple-cobbler-26520.herokuapp.com/addEvent`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>console.log("server side response",res))

        console.log(eventData);
    }

    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','2bda71818c9001c9cae7ef2a0ecc9c5a');
        imageData.append('image',event.target.files[0]);
        

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
              console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="add-area">
            <div className="inner-form">
                 <form onSubmit={handleSubmit(onSubmit)}>
    
                        <input name="name" defaultValue="" ref={register} placeholder="Book Name" />
                        <br/>
                        <input  name="author" defaultValue="" ref={register}  placeholder="Author Name" />
                        <br/>
                        <input  name="price" defaultValue="" ref={register} placeholder="Price" />
                        <br/>
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br/>
                        <input type="submit" />
                 </form>
            </div>
        </div>
    );
};

export default Add;