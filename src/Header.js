import React, { Component } from 'react';
import Background from './img/bg-masthead.jpg';
import './header.css'

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height:'100%',
    width:'100%',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
}
class Header extends Component{
  
    
    render(){
     return(

       <div className="col-lg-12 col-md-12 col-sm-12">
            <header style={myStyles}>
                <h1>
                    {this.props.title}
                </h1>
                <h2 style={{paddingBottom:'0.5em'}}>
                {this.props.subtitle}
                </h2>
                <a href="#button" style={{marginBottom:'2em'}}>{this.props.bton}Explore More</a>
                

        </header>
        
       </div>
        
     );   
    }


};

export default Header;