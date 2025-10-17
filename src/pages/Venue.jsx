import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const UNILAG_COORDS = [6.5167, 3.3896];

function Venue() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for demonstration
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ minHeight: "100vh" }}>
            
            {loading ? (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60vh"
                }}>
                    <div className="spinner" />
                    <style>
                        {`
                            .spinner {
                                width: 48px;
                                height: 48px;
                                border: 6px solid #e0e0e0;
                                border-top: 6px solid #007bff;
                                border-radius: 50%;
                                animation: spin 1s linear infinite;
                            }
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}
                    </style>
                </div>
            ) : (
                <div style={{ width: "100%", maxWidth: 600, margin: "0 auto", height: 400, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                    <MapContainer
                        center={UNILAG_COORDS}
                        zoom={16}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={UNILAG_COORDS}>
                            <Popup>
                                UNILAG Sports Centre, Lagos, Nigeria
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}
        </div>
    );
}

export default Venue;


// import { useEffect, useState } from "react";
// import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix default marker icon issue with Leaflet in React
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl:
//         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//     iconUrl:
//         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//     shadowUrl:
//         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// const UNILAG_COORDS = [6.5167, 3.3896];

// // Dark tile layer from CartoDB
// const DARK_TILE_URL =
//     "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
// const DARK_ATTRIBUTION =
//     '&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://osm.org/copyright">OpenStreetMap</a>';

// function Venue() {
//     const [loading, setLoading] = useState(true);
//     const bg = useColorModeValue("gray.50", "gray.900");

//     useEffect(() => {
//         const timer = setTimeout(() => setLoading(false), 1200);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <Box minH="100vh" bg={bg} pt={{ base: 8, md: 16 }}>
//             {loading ? (
//                 <Box
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                     h="60vh"
//                 >
//                     <Spinner
//                         thickness="6px"
//                         speed="0.8s"
//                         emptyColor="gray.200"
//                         color="blue.500"
//                         size="xl"
//                     />
//                 </Box>
//             ) : (
//                 <Box
//                     w="100%"
//                     maxW="600px"
//                     mx="auto"
//                     h={{ base: "300px", md: "400px" }}
//                     borderRadius="lg"
//                     overflow="hidden"
//                     boxShadow="md"
//                 >
//                     <MapContainer
//                         center={UNILAG_COORDS}
//                         zoom={16}
//                         style={{ height: "100%", width: "100%" }}
//                         scrollWheelZoom={false}
//                     >
//                         <TileLayer
//                             attribution={DARK_ATTRIBUTION}
//                             url={DARK_TILE_URL}
//                         />
//                         <Marker position={UNILAG_COORDS}>
//                             <Popup>
//                                 UNILAG Sports Centre, Lagos, Nigeria
//                             </Popup>
//                         </Marker>
//                     </MapContainer>
//                 </Box>
//             )}
//         </Box>
//     );
// }

// export default Venue;
