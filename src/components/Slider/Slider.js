import React from 'react';
import './Slider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Photo1 from "../image/download (1).jfif";
import Photo2 from "../image/download (2).jfif";
import Photo6 from "../image/download.jfif";
import Photo3 from "../image/images.jfif";
import Photo4 from "../image/images (1).jfif";
import Photo5 from "../image/images (2).jfif";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slider = () => {
    return (
        <div className="full-slider-area">
        <div className="container">
            <h2>Current Bestsellers</h2>
                <Carousel responsive={responsive}>
                    <div>
                        <img src={Photo1} alt="" style={{width:'100%', height:'400px',padding:'10px'}} />
                    </div>
                    <div>
                       <img src={Photo2} alt="" style={{width:'100%', height:'400px',padding:'10px'}} />
                    </div>
                    <div>
                       <img src={Photo3} alt="" style={{width:'100%', height:'400px',padding:'10px'}}/>
                    </div>
                    <div>
                        <img src={Photo4} alt="" style={{width:'100%', height:'400px',padding:'10px'}} />
                    </div>
                    <div>
                        <img src={Photo5} alt="" style={{width:'100%', height:'400px',padding:'10px'}}/>
                    </div>
                    <div>
                         <img src={Photo6} alt="" style={{width:'100%', height:'400px',padding:'10px'}}/>
                    </div>
               </Carousel>
       </div>
       </div>
    );
};

export default Slider;