import GoogleMapReact from "google-map-react";
import React from "react";
import "../App.css";

function Map() {
  const mapStyle = {
    height: "90vh",
  };

  let marker = null;
  let center = { lat: 48.856614, lng: 2.352222 };

  return (
    <div className="col-sm-5" style={mapStyle}>
      <GoogleMapReact center={center} defaultZoom={15}>
        {marker}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
