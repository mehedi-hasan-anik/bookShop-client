import React, { useContext } from 'react';
import { userContext } from '../../App';
import ManageList from '../ManageList/ManageList';
import Me from '../Me/Me';


const Manage = () => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    const manageResult = allImage.filter(event=> event.imageURL);
    console.log("result",manageResult);
    return (
        <div className="">
           <div className="row">
               <div className="col-md-3">
                   <Me></Me>
               </div>
               <div className="col-md-9">
                    <div className="row">
                        {
                            manageResult.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><ManageList event={event}></ManageList></div>)
                        }
                    </div>  
               </div>
           </div>
       </div>
    );
};

export default Manage;