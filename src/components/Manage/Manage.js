import React, { useContext } from 'react';
import { userContext } from '../../App';
import ManageList from '../ManageList/ManageList';

const Manage = () => {
    const [user,setUser,allImage,setAllImage]=useContext(userContext);
    const manageResult = allImage.filter(event=> event.imageURL);
    return (
        <div className="container">
            <div className="row">
                {
                    manageResult.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><ManageList event={event}></ManageList></div>)
                }
            </div>  
       </div>
    );
};

export default Manage;