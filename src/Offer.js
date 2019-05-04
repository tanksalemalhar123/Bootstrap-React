import React, { Component } from 'react';

import './Offer.css';

class Offer extends Component {
    render() {
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 middle2">
                <h1>{this.props.message}</h1>
                <h2>{this.props.submessage}</h2>
                <a href="#button1">{this.props.button1}</a>
            </div>
        );
    }
}

export default Offer;

