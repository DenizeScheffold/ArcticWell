import { memo, useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import markerData from "../db/markers.json";
import styles from "../styles/Map.module.css";
import Image from "next/image";
import Head from "next/head";
import mapStyles from "../components/mapStyles";
import Navbar from "../components/Navbar";

const Map = () => {
  const [map, setMap] = useState(null);

  const [pos, setPos] = useState({
    lat: 59.3095651,
    lng: 18.0194099,
  });

  const [selected, setSelected] = useState(null);

  const options = {
    disableDefaultUI: true,
    styles: mapStyles,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const { isLoaded } = useJsApiLoader({
    id: process.env.ID,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const centerMap = useCallback(function callback(map) {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setPos({ lat, lng });
      }
    );
  }, []);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // The first Marker is the user's (geolocated) position, the 2nd loads the values in markers.json
  return isLoaded ? (
    <div className={styles.map_container}>
      <Head>
        <title>Arctic Well</title>
      </Head>
      <GoogleMap
        id={"arctic-map"}
        mapContainerStyle={containerStyle}
        center={pos}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        <Marker position={pos} />
        {markerData.map((arcticWellMarker) => (
          <Marker
            key={arcticWellMarker.name}
            position={{
              lat: arcticWellMarker.lat,
              lng: arcticWellMarker.lng,
            }}
            icon={arcticWellMarker.icon}
            onClick={() => {
              setSelected(arcticWellMarker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
            options={{
              pixelOffset: new google.maps.Size(0, -37),
              minWidth: 300,
            }}
          >
            {/* @TODO: this should be moved to its own function */}
            <div className={styles.infowindow_super_container}>
              {selected.name}
              <div className={styles.infowindow_icon_container}>
                <Image
                  className={styles.infowindow_icons}
                  alt="infowindowicon"
                  src="/Snowflake.svg"
                  layout="fixed"
                  width={60}
                  height={60}
                  quality={100}
                />
                <Image
                  className={styles.infowindow_icons}
                  alt="infowindowicon"
                  src="/Capacity.svg"
                  layout="fixed"
                  width={60}
                  height={60}
                  quality={100}
                />
                <Image
                  className={styles.infowindow_icons}
                  alt="infowindowicon"
                  src="/Time.svg"
                  layout="fixed"
                  width={60}
                  height={60}
                  quality={100}
                />
                <Image
                  className={styles.infowindow_icons}
                  alt="infowindowicon"
                  src="/Price.svg"
                  layout="fixed"
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
            </div>
          </InfoWindow>
        ) : null}
        <button className={styles.location_container} onClick={centerMap}>
          <Image
            className={styles.centerBtn}
            alt="locateBtn"
            src="/find_location_vector.png"
            layout="responsive"
            width={4}
            height={4}
            quality={100}
          />
        </button>
        {/* Child components, such as markers and info windows go above <Navbar /> */}
        <Navbar />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default memo(Map);
