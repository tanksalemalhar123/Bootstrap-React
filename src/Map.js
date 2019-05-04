import React, { Component } from 'react';

class Map extends Component {
    render() {
        return (
            <div id="map-container-google-1" className="col-lg-12 col-md-12 col-sm-12 z-depth-1-half map-container" style={{paddingTop:'0.2em',height: '200px',width:'100%'}}>
            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{border:'0',height: '200%',width:'100%'}} title="This is a unique title" allowFullScreen>
            </iframe>
          </div>
        );
    }
}

export default Map;