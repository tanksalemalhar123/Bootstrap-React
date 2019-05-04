import React,{Component} from 'react';
import Background from './img/bg-callout.jpg';
import './middle.css';


const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height:'100vh',
    backgroundSize: 'cover'
}
class MiddleContainer extends Component{

    render(){
     return(
        <header style={myStyles}>
                <div className="col-lg-12 col-md-12 col-sm-12 middle3">
                <h1>
                    {this.props.ttle}
                </h1>
                <a href="#button">{this.props.bton}</a>
                </div>
        </header>
        
     );   
    }


};

export default MiddleContainer;