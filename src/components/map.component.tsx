import { useEffect } from "react";
import useGoogleMap from './init-map-hook';


const GoogleMap = ({ address }: { address: string }) => {
  const { initMap } = useGoogleMap();
  
  useEffect(() => {
    initMap(address, 'map', 20);
  }, [address, initMap]);

  return <div id="map" style={{ height: "100%" }}></div>;
};

export default GoogleMap;
