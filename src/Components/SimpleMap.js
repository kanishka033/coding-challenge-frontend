import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap =({ center })=> {

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

    return (
      <div style={{ height: '100%', width: '600px',margin:'20px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDQjbAbpwkoJhJLzceB1G5K4v0c7q_c-uc' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={center? center.lat : 59.95}
            lng={center? center.lng : 30.33}
            text="My Marker"
          />

        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;