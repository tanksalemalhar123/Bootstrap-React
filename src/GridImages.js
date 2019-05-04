import React, { Component } from 'react';
import './GridImages.css';



class GridImages extends Component {
    render() {
       
        return(
            <div className="grid">
                <div className="rowImages">
                   
                   <div><MyIcons myiconss= {iconObj[0].icon} myTitles={iconObj[0].title}/></div>
                   <div><MyIcons myiconss= {iconObj[1].icon} myTitles={iconObj[1].title}/></div>
                   <div><MyIcons myiconss= {iconObj[2].icon} myTitles={iconObj[2].title}/></div>
                
                </div>
                <p class="text-muted small mb-0">Copyright © Your Website 2018</p>
            </div>
        );
    }
}

const iconObj = [
    
        {
            icon:  <ion-icon name="logo-facebook"></ion-icon>,
            title: 'Facebook',
            
        },
        {
            icon:  <ion-icon name="logo-twitter"></ion-icon>,
            title: 'Twitter',
            
        },
        {
            icon: <ion-icon name="logo-github"></ion-icon>,
            title: 'Github',
            
        }
    
];


class MyIcons extends Component{
    render(){
        return(
        <div>
            <span>
                {this.props.myiconss}
            </span>
            <h4>{this.props.myTitles}</h4>
           
        </div>
        );
    }
}

export default GridImages;