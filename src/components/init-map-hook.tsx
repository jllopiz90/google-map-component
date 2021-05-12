
import { CoordinatesObject, MapType } from './interfaces';

export default function useGoogleMap() {
    const getGeoLocationObj = async (address: string) =>
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        address
      )}&key=${process.env.REACT_APP_MAPS_KEY}`
    )
      .then((response) => response.json())
      .then((data) => data);

  const getCoordinates = async (address: string): Promise<CoordinatesObject> => fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        address
      )}&key=${process.env.REACT_APP_MAPS_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.results.length === 1) {
          return {
            coordinates: data?.results[0].geometry.location,
            success: true,
          };
        } else if (data?.results.length > 1) {
          return {
            success: false,
            error: "Address ambiguous.",
          };
        } else {
          return {
            success: false,
            error: "Address not found.",
          };
        }
      });

  const initMap = async (
    address: string,
    mapContainerId: string,
    zoom: number = 10,
    mapType: MapType = "satellite"
  ) => {
    const coordObj = await getCoordinates(address);
    console.log('address',address)
    console.log('coordObj',coordObj)
    if (coordObj.success && coordObj.coordinates) {
      const { lat, lng } = coordObj.coordinates;
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&libraries=&v=weekly`;
      googleMapScript.async = true;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", () => {
        //@ts-ignore
        new google.maps.Map(document.getElementById(mapContainerId), {
          center: { lat, lng },
          zoom,
          mapTypeId: mapType,
        });
      });
    }
  }

  return { getCoordinates, getGeoLocationObj, initMap };
}
