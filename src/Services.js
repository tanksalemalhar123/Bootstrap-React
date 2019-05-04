import React, { Component } from 'react';
import './Services.css';
import Phone from './img/phone.png';
import Crayon from './img/crayon.png';
import Like from './img/like.png';
import Ms from './img/mss.png';

class Services extends Component{
    render(){
        return(
        <div className="col-lg-12 col-md-12 col-sm-12 services">
                <h3>Services</h3>
                <h2>What We Offer</h2>
            <div className="col-lg-12 col-md-12 col-sm-12 row">
                <Icons myIcon= {iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
                <Icons myIcon= {iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
                <Icons myIcon= {iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
                <Icons myIcon= {iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description}/>
                
            </div>
        </div>
        );
    }
}

const iconObj = [
    {
        icon:  <img src={Phone} style={{width:'auto'}}/>,
        title: 'Responsive',
        description: 'Looks Great on Any Screen Size!'
    },
    {
        icon:  <img src={Crayon} style={{width:'auto'}}/>,
        title: 'Redesigned',
        description: 'Freshly Redigned for Bootstrap'
    },
    {
        icon:   <img src={Like} style={{width:'auto'}}/>,
        title: 'Favourited',
        description: 'Millions of Users Love Start Bootsrtap!'
    },
    {
        icon:  <img src={Ms} style={{width:'auto',paddingBottom:'1em'}}/>,
        title: 'Question',
        description: 'I Mustache you a Question...'
    }
];

class Icons extends Component{
    render(){
        return(
        <div style={{borderRadius:'50px'}}>
            <div >
                {this.props.myIcon}
            </div>
            <h4>{this.props.myTitle}</h4>
            <p>{this.props.myDescription}</p>
        </div>
        );
    }
}
export default Services;