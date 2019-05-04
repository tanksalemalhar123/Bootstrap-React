import React, { Component } from 'react';
import './Footer.css';
import Facebook from './img/facebook.png';
import Tw from './img/twitter.png';
import Git from './img/github.png';

class Footer extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 middle8" style={{marginTop:'220px'}}>
               <img src={Facebook} alt="fb" style={{width:'auto',padding:'0.5em',cursor:'pointer'}}/>
               <img src={Tw} alt="tw" style={{width:'auto',padding:'0.5em',cursor:'pointer'}}/>
               <img src={Git}   alt="git" style={{width:'auto',padding:'0.5em',cursor:'pointer'}}/>
               <p style={{paddingTop:'0.5em',paddingBottom:'3.5em'}} className="text-muted small mb-0">Copyright © Your Website 2018</p>
        </div>
        );
    }
}

export default Footer;