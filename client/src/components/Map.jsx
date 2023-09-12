import { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Spinner from "./Spinner";
import { geocodingMaps } from "../cards/services/cardApiService";
import Erorr from "./Error";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ address }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "key",
  });

  const [location, setLocation] = useState(null);

  const fetchData = async () => {
    try {
      const data = await geocodingMaps(address);
      const { lat, lng } = data.results[0].geometry.location;
      setLocation({ lat, lng });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loadError) {
    return <Erorr errorMessage="the map is not working right now" />;
  }

  if (!location) {
    return <Erorr errorMessage="the address of the card was not found " />;
  }

  return isLoaded || location ? (
    <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={14}>
      <MarkerF position={location} visible={true} />
    </GoogleMap>
  ) : (
    <Spinner />
  );
};
export default Map;
