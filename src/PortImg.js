import React,{Component} from 'react';
import  './PortImg.css';
import Background1 from './img/portfolio3.jpg';
import Background2 from './img/portfolio2.jpg';
import Background3 from './img/portfolio1.jpg';
import Background4 from './img/portfolio4.jpg';
import Background5 from './img/bg-masthead.jpg';



class PortImg extends Component{
render(){
    return(
        <div className="col-lg-12 col-md-12 col-sm-12 PortImgDiv">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>
            Portfolio
            </h3> 
            <p>Recent Project</p> 
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ">
          <img src={Background1} style={{width:'auto'}}/>
          <img src={Background2} style={{width:'auto'}}/>
          <img src={Background3} style={{width:'auto'}}/>
          <img src={Background4} style={{width:'auto'}}/>
         
         
         
          </div>
          
        </div>
    );
}
};

export default PortImg;