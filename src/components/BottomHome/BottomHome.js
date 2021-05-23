import React from 'react';
import './BottomHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmericanSignLanguageInterpreting, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCcAmazonPay } from '@fortawesome/free-brands-svg-icons';

const BottomHome = () => {
    return (
        <div className="bottomHome-area">
            <div className="container inner-bottomHome-area">
                <div className="row">
                    <div className="col-md-4 cart1-area">
                        <div className="row">
                            <div className="col-md-4  d-flex align-items-center justify-content-center topHomeArea-text">
                                <div>
                                    <FontAwesomeIcon icon={faTruck} style={{ color:'#007ACC', fontSize:'60px'}}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h4>Quick Delivery</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 cart1-area" >
                        <div className="row">
                            <div className="col-md-4  d-flex align-items-center justify-content-center topHomeArea-text ">
                                <div>
                                    <FontAwesomeIcon icon={faCcAmazonPay} style={{ color:'#007ACC', fontSize:'60px'}} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h4>Pay With Easy</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 cart1-area" style={{borderRight:"0px"}}>
                         <div className="row">
                             <div className="col-md-4  d-flex align-items-center justify-content-center topHomeArea-text">
                                 <div>
                                     <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} style={{ color:'#007ACC', fontSize:'60px'}} />
                                 </div>
                             </div>
                             <div className="col-md-8">
                                  <h4>Best Deal</h4>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHome;