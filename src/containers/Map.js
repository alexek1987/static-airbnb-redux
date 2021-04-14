import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

const Map = () => {
  const selectedFlat = useSelector((state) => state.selectedFlat);

  let marker = null;
  let center = { lat: 48.856614, lng: 2.352222 };

  if (selectedFlat) {
    marker = (
      <img
        width="30px"
        src="https://dwj199mwkel52.cloudfront.net/assets/lewagon-logo-square-b6124eb974be375884558e4464efce48a9b5664f18422768156364363ecdd1fc.png"
        lat={selectedFlat.lat}
        lng={selectedFlat.lng}
        alt=""
      />
    );
    center = {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng,
    };
  }

  return (
    <div className="col-sm-5" style={{ height: "100vh" }}>
      <GoogleMapReact center={center} defaultZoom={15}>
        {marker}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
