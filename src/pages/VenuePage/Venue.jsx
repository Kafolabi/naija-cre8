// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import FullPageLoader from "../../ui/FullPageLoader";
// import { Box, Text } from "@chakra-ui/react";

// // Fix default marker icon issue with Leaflet in React
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

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

// const UNILAG_COORDS = [6.5167, 3.3896];

// function Venue() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading for demonstration
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Box maxH="70vh" mt={20}>
//         {loading ? (
//           <FullPageLoader />
//         ) : (
//           <Box
//             width="100%"
//             margin="0 auto"
//             height="70vh"
//             borderRadius={20}
//             overflow="hidden"
//             boxShadow="0 2px 8px rgba(0,0,0,0.08)"
//           >
//             {/* Popup background override */}
//             <style>{`
//                     /* use your Chakra color variable with a fallback hex */
//                     .venue-popup .leaflet-popup-content-wrapper {
//                         background: var(--chakra-colors-boxCream, #fff8e1) !important;
//                     }
//                     .venue-popup .leaflet-popup-tip {
//                         background: var(--chakra-colors-boxCream, #fff8e1) !important;
//                     }
//                 `}</style>

//             <MapContainer
//               center={UNILAG_COORDS}
//               zoom={16}
//               style={{ height: "100%", width: "100%" }}
//               scrollWheelZoom={false}
//             >
//               <TileLayer
//                 attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>'
//                 url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
//               />
//               <Marker
//                 position={UNILAG_COORDS}
//                 icon={boxGreenIcon}
//                 eventHandlers={{
//                   add: (e) => e.target.openPopup(), // open popup when marker is added (on load)
//                 }}
//               >
//                 <Popup className="venue-popup">
//                   <div
//                     style={{
//                       fontFamily: "var(--chakra-fonts-body)",
//                       padding: 0,
//                     }}
//                   >
//                     UNILAG Sports Centre, Lagos, Nigeria
//                   </div>
//                 </Popup>
//               </Marker>
//             </MapContainer>
//           </Box>
//         )}
//       </Box>
//       <Text color="textWhite" my={12} fontSize="2xl" lineHeight="taller">
//         <b>LOCATION:</b> Unilag Indoor Sports Complex, Lagos, Nigeria
//         <br />
//         <b>Date:</b> February 14, 2025
//       </Text>
//     </>
//   );
// }

// export default Venue;

// pages/Venue.jsx
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import FullPageLoader from "../../ui/FullPageLoader";
import MapWrapper from "./MapWrapper"; // Map component stays mounted

function Venue() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
<Box
  mt={20}
  width="100%"
  position="relative"
  borderRadius={20}
  overflow="hidden"
  boxShadow="0 2px 8px rgba(0,0,0,0.08)"
>
  <MapWrapper />

  {loading && (
    <Box
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="boxCream"
      zIndex={10}
    >
      <FullPageLoader />
    </Box>
  )}
</Box>

      <Text color="textWhite" my={12} fontSize="2xl" lineHeight="taller">
        <b>LOCATION:</b> Unilag Indoor Sports Complex, Lagos, Nigeria
        <br />
        <b>Date:</b> February 14, 2025
      </Text>
    </>
  );
}

export default Venue;
