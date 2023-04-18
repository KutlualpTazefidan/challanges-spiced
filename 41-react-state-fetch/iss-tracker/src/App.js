import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

// const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const URL = "http://api.open-notify.org/iss-now.json";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const issPosition = data["iss_position"];
      setCoords({
        longitude: Number(issPosition.longitude),
        latitude: Number(issPosition.latitude),
      });
      console.log(issPosition.latitude);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getISSCoords();
    const intervallId = setInterval(() => {
      getISSCoords();
    }, 5000);
    return () => clearInterval(intervallId);
  });

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
