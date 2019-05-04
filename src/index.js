import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';
import Services from './Services';
import Offer from './Offer';
import GridImages from './GridImages';
import MiddleContainer from './MiddleContainer';
import PortfolioImages from './PortfolioImages';
import PortImg from './PortImg';
import Map from './Map';
import Footer from './Footer';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";




class App extends Component{
    render(){
        return(
            <div>
           <ScrollUpButton/>
            <Header title="Stylish Portfolio" subtitle="A Theme By Me" button="Find Out More"/>
            <Offer message="Stylish Portfolio is the Perfect theme for your next Project!" submessage="This Theme features a flexible UI and a Friendly Menu" button1="What we Offer"/>
            <Services />
            <MiddleContainer ttle="Welcome to your next website!" bton="Download Now"/>
            <PortImg />
            <PortfolioImages />
            <Map/>
            <Footer/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
