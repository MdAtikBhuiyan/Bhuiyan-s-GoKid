import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius:'8px'
};

const center = {
  lat: 23.7104,
  lng: 90.40744
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAkb71lrEo8QVXu2tz9X_C_jyVtW5As3T8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)

// import React from 'react';

// const Map = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Map;