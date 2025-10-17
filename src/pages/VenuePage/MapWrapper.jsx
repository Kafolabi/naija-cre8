// // ui/MapWrapper.jsx
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// const UNILAG_COORDS = [6.5167, 3.3896];

// const boxGreenIcon = new L.Icon({
//   iconUrl:
//     "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// export default function MapWrapper() {
//   return (
//     <MapContainer
//       center={UNILAG_COORDS}
//       zoom={16}
//       style={{ height: "70vh", width: "100%" }}
//       scrollWheelZoom={false}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>'
//         url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
//       />
//       <Marker position={UNILAG_COORDS} icon={boxGreenIcon}>
//         <Popup>UNILAG Sports Centre, Lagos, Nigeria</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }


// ui/MapWrapper.jsx
// ui/MapWrapper.jsx
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const UNILAG_COORDS = [6.5167, 3.3896];
const boxGreenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapWrapper() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Wait for the next animation frame to ensure container is fully laid out
    const raf = requestAnimationFrame(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <MapContainer
      center={UNILAG_COORDS}
      zoom={16}
      style={{ height: "70vh", width: "100%" }}
      scrollWheelZoom={false}
      whenCreated={(map) => (mapRef.current = map)}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={UNILAG_COORDS} icon={boxGreenIcon}>
        <Popup>UNILAG Sports Centre, Lagos, Nigeria</Popup>
      </Marker>
    </MapContainer>
  );
}
