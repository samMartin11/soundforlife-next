"use client";

import { useState, useEffect } from "react";
import { Navigation, Loader2 } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import centresData from "@/public/Center Location.json";

/* ── Fix default Leaflet marker icons broken by webpack ──────── */
const clinicIcon = L.divIcon({
  className: "",
  html: `<div style="
    background:#1a7887;color:#fff;border-radius:50%;
    width:28px;height:28px;display:flex;align-items:center;
    justify-content:center;font-size:13px;font-weight:700;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid #fff;
  ">S</div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -18],
});

const userIcon = L.divIcon({
  className: "",
  html: `<div style="
    background:#F39200;color:#fff;border-radius:50%;
    width:20px;height:20px;border:3px solid #fff;
    box-shadow:0 2px 8px rgba(0,0,0,0.4);
  "></div>
  <div style="
    position:absolute;top:-1px;left:-1px;
    background:rgba(243,146,0,0.25);border-radius:50%;
    width:22px;height:22px;animation:pulse 1.5s infinite;
  "></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  popupAnchor: [0, -14],
});

/* Fly to user location when it changes */
function FlyToUser({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => { map.flyTo([lat, lng], 10, { duration: 1.2 }); }, [lat, lng, map]);
  return null;
}

const clinics = centresData as { centre_name: string; address: string; lat: number; lng: number }[];

export default function ClinicFinder() {
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLng, setUserLng] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  function getLocation() {
    if (!navigator.geolocation) { setError("Geolocation not supported."); return; }
    setLoading(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => { setUserLat(pos.coords.latitude); setUserLng(pos.coords.longitude); setLoading(false); },
      ()    => { setError("Could not get location. Please allow access."); setLoading(false); }
    );
  }

  return (
    <div>
      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <button
          onClick={getLocation}
          disabled={loading}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "#1a7887", color: "#fff", border: "none",
            borderRadius: "0.75rem", padding: "0.75rem 1.4rem",
            fontWeight: 700, fontSize: "0.9rem",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading
            ? <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Locating…</>
            : <><Navigation size={16} /> Show My Location</>}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", fontSize: "0.8rem", color: "#6b7280" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#1a7887", display: "inline-block" }} />
            SFL Clinic
          </span>
          {userLat && (
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#F39200", display: "inline-block" }} />
              Your Location
            </span>
          )}
        </div>

        {error && <span style={{ fontSize: "0.82rem", color: "#ef4444" }}>{error}</span>}
      </div>

      {/* Map */}
      <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1.5px solid #e8e2db", height: 520 }}>
        <MapContainer
          center={[22.5, 78.9]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* All clinic pins */}
          {clinics.map((c) => (
            <Marker key={c.centre_name + c.lat} position={[c.lat, c.lng]} icon={clinicIcon}>
              <Popup>
                <strong>SFL – {c.centre_name}</strong><br />
                <span style={{ fontSize: "0.82rem", color: "#374151" }}>{c.address}</span><br /><br />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1a7887", fontWeight: 600 }}
                >
                  Open in Google Maps →
                </a>
              </Popup>
            </Marker>
          ))}

          {/* User location pin */}
          {userLat !== null && userLng !== null && (
            <>
              <FlyToUser lat={userLat} lng={userLng} />
              <Marker position={[userLat, userLng]} icon={userIcon}>
                <Popup>📍 You are here</Popup>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>

      <style>{`
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { transform:scale(1);opacity:0.6; } 50% { transform:scale(2.2);opacity:0; } }
      `}</style>
    </div>
  );
}

// ------------------------------------------------------------------- 

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Navigation, Loader2, MapPin, Calendar, X, CheckCircle, ExternalLink, ChevronRight } from "lucide-react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import centresData from "@/public/Center Location.json";

// /* ── Types ─────────────────────────────────────────────────── */
// type Centre = {
//   centre_name: string;
//   address: string;
//   lat: number;
//   lng: number;
// };

// type BookingForm = {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   date: string;
//   slot: string;
//   city: string;
//   test: string;
// };

// /* ── Icons ──────────────────────────────────────────────────── */
// const clinicIcon = L.divIcon({
//   className: "",
//   html: `<div style="
//     background:#1a7887;color:#fff;border-radius:50%;
//     width:28px;height:28px;display:flex;align-items:center;
//     justify-content:center;font-size:13px;font-weight:700;
//     box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid #fff;
//   ">S</div>`,
//   iconSize: [28, 28],
//   iconAnchor: [14, 14],
//   popupAnchor: [0, -18],
// });

// const userIcon = L.divIcon({
//   className: "",
//   html: `<div style="position:relative;width:22px;height:22px;">
//     <div style="
//       background:#F39200;border-radius:50%;
//       width:20px;height:20px;border:3px solid #fff;
//       box-shadow:0 2px 8px rgba(0,0,0,0.4);position:absolute;top:1px;left:1px;
//     "></div>
//     <div style="
//       position:absolute;top:0;left:0;
//       background:rgba(243,146,0,0.25);border-radius:50%;
//       width:22px;height:22px;animation:pulse 1.5s infinite;
//     "></div>
//   </div>`,
//   iconSize: [22, 22],
//   iconAnchor: [11, 11],
//   popupAnchor: [0, -14],
// });

// /* ── Helpers ────────────────────────────────────────────────── */
// function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
//   const R = 6371;
//   const dLat = ((lat2 - lat1) * Math.PI) / 180;
//   const dLng = ((lng2 - lng1) * Math.PI) / 180;
//   const a =
//     Math.sin(dLat / 2) ** 2 +
//     Math.cos((lat1 * Math.PI) / 180) *
//       Math.cos((lat2 * Math.PI) / 180) *
//       Math.sin(dLng / 2) ** 2;
//   return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// }

// function extractCity(address: string): string {
//   const known = [
//     "New Delhi","Noida","Greater Noida","Ghaziabad","Gurugram","Gurgaon",
//     "Faridabad","Karnal","Ambala","Chandigarh","Hoshiarpur","Jalandhar",
//     "Ludhiana","Amritsar","Bathinda","Agra","Prayagraj","Lucknow",
//     "Kanpur","Moradabad","Dehradun","Jaipur","Vadodara","Gandhinagar",
//     "Surat","Ahmedabad","Anand","Jammu","Kolkata","Howrah",
//     "Navi Mumbai","Mumbai","Trivandrum","Bengaluru",
//   ];
//   for (const city of known) {
//     if (address.includes(city)) return city;
//   }
//   const parts = address.split(",");
//   return parts[parts.length - 1].trim().replace(/-\d+$/, "").trim();
// }

// /* ── FlyToUser ──────────────────────────────────────────────── */
// function FlyToUser({ lat, lng }: { lat: number; lng: number }) {
//   const map = useMap();
//   useEffect(() => {
//     map.flyTo([lat, lng], 10, { duration: 1.2 });
//   }, [lat, lng, map]);
//   return null;
// }

// /* ── FlyToCentre ────────────────────────────────────────────── */
// function FlyToCentre({ centre }: { centre: Centre | null }) {
//   const map = useMap();
//   useEffect(() => {
//     if (centre) map.flyTo([centre.lat, centre.lng], 14, { duration: 0.9 });
//   }, [centre, map]);
//   return null;
// }

// /* ── FlyToBounds ────────────────────────────────────────────── */
// function FlyToBounds({ centres }: { centres: Centre[] }) {
//   const map = useMap();
//   useEffect(() => {
//     if (!centres.length) return;
//     if (centres.length === 1) {
//       map.flyTo([centres[0].lat, centres[0].lng], 13, { duration: 1 });
//     } else {
//       const bounds = L.latLngBounds(centres.map((c) => [c.lat, c.lng]));
//       map.flyToBounds(bounds, { padding: [60, 60], duration: 1 });
//     }
//   }, [centres, map]);
//   return null;
// }

// /* ── Main component ─────────────────────────────────────────── */
// const clinics = centresData as Centre[];

// /* ── City list derived from centres ── */
// const CITY_MAP: Record<string, string[]> = {
//   "New Delhi":    ["Greater Kailash","Janakpuri","Mayur Vihar Phase 1","Old Rajendra Nagar"],
//   "Noida":        ["Sector 22","Sector 3"],
//   "Greater Noida":["Greater Noida"],
//   "Ghaziabad":    ["Raj Nagar"],
//   "Gurugram":     ["M.G. Road","Bhim Nagar"],
//   "Faridabad":    ["Sector 16"],
//   "Karnal":       ["Mughal Canal Market"],
//   "Ambala":       ["Ambala City"],
//   "Chandigarh":   ["Sector 20C"],
//   "Hoshiarpur":   ["Hoshiarpur"],
//   "Jalandhar":    ["Jalandhar"],
//   "Ludhiana":     ["Ludhiana"],
//   "Amritsar":     ["Amritsar"],
//   "Bathinda":     ["Bathinda"],
//   "Agra":         ["Agra"],
//   "Prayagraj":    ["Prayagraj"],
//   "Lucknow":      ["Gomti Nagar"],
//   "Kanpur":       ["Kanpur"],
//   "Moradabad":    ["Moradabad"],
//   "Dehradun":     ["Dehradun"],
//   "Jaipur":       ["Jaipur"],
//   "Vadodara":     ["Vadodara"],
//   "Gandhinagar":  ["Gandhinagar"],
//   "Surat":        ["Surat"],
//   "Ahmedabad":    ["Chandkheda"],
//   "Anand":        ["Anand"],
//   "Jammu":        ["Gandhinagar (Jammu)"],
//   "Kolkata":      ["Kalighat","Ultadanga"],
//   "Howrah":       ["Howrah"],
//   "Mumbai":       ["Kandivali","Andheri","Nerul"],
//   "Trivandrum":   ["Trivandrum"],
//   "Bengaluru":    ["Jayanagar","Sahakara Nagar"],
// };
// const CITY_NAMES = Object.keys(CITY_MAP);
// const TIME_SLOTS = [
//   "8:00 AM – 9:00 AM",
//   "9:00 AM – 10:00 AM",
//   "10:00 AM – 11:00 AM",
//   "11:00 AM – 12:00 PM",
//   "2:00 PM – 3:00 PM",
//   "3:00 PM – 4:00 PM",
//   "4:00 PM – 5:00 PM",
// ];

// export default function ClinicFinder() {
//   const [userLat, setUserLat] = useState<number | null>(null);
//   const [userLng, setUserLng] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [focusCentre, setFocusCentre] = useState<Centre | null>(null);
//   const [activeIdx, setActiveIdx] = useState<number | null>(null);
//   const [modalCentre, setModalCentre] = useState<Centre | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [selectedCity, setSelectedCity] = useState<string | null>(null);
//   const [cityBounds, setCityBounds] = useState<Centre[] | null>(null);
//   const [form, setForm] = useState<BookingForm>({
//     firstName: "", lastName: "", phone: "", email: "",
//     date: "", slot: "", city: "", test: "",
//   });
//   const [formError, setFormError] = useState("");
//   const listRef = useRef<HTMLDivElement>(null);

//   /* ── derive displayed centres ── */
//   const baseSorted: Centre[] =
//     userLat !== null && userLng !== null
//       ? [...clinics].sort(
//           (a, b) =>
//             haversine(userLat, userLng, a.lat, a.lng) -
//             haversine(userLat, userLng, b.lat, b.lng)
//         )
//       : clinics;

//   const sorted: Centre[] = selectedCity
//     ? baseSorted.filter((c) => CITY_MAP[selectedCity]?.includes(c.centre_name))
//     : baseSorted;

//   /* ── City filter handler ── */
//   function handleCityFilter(city: string) {
//     if (selectedCity === city) {
//       setSelectedCity(null);
//       setCityBounds(null);
//     } else {
//       setSelectedCity(city);
//       const matches = clinics.filter((c) => CITY_MAP[city]?.includes(c.centre_name));
//       setCityBounds(matches);
//       setActiveIdx(null);
//     }
//   }

//   /* ── Geolocation ── */
//   function getLocation() {
//     if (!navigator.geolocation) { setError("Geolocation not supported."); return; }
//     setLoading(true);
//     setError("");
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setUserLat(pos.coords.latitude);
//         setUserLng(pos.coords.longitude);
//         setLoading(false);
//       },
//       () => {
//         setError("Could not get location. Please allow access.");
//         setLoading(false);
//       }
//     );
//   }

//   /* ── Focus item in list ── */
//   function handleSelectCentre(centre: Centre, idx: number) {
//     setActiveIdx(idx);
//     setFocusCentre(centre);
//     // scroll item into view in panel
//     const el = document.getElementById(`clinic-item-${idx}`);
//     el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
//   }

//   /* ── Open modal ── */
//   function openModal(centre: Centre) {
//     setModalCentre(centre);
//     setSubmitted(false);
//     setFormError("");
//     setForm({
//       firstName: "", lastName: "", phone: "", email: "",
//       date: "", slot: "", city: extractCity(centre.address), test: "",
//     });
//   }

//   function closeModal() {
//     setModalCentre(null);
//     setSubmitted(false);
//   }

//   /* ── Submit ── */
//   function handleSubmit() {
//     if (!form.firstName || !form.phone || !form.date || !form.slot) {
//       setFormError("Please fill in name, phone, date and time slot.");
//       return;
//     }
//     setFormError("");
//     setSubmitted(true);
//   }

//   const today = new Date().toISOString().split("T")[0];

//   return (
//     <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
//       {/* ── Top Controls ── */}
//       <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
//         <button
//           onClick={getLocation}
//           disabled={loading}
//           style={{
//             display: "inline-flex", alignItems: "center", gap: "0.5rem",
//             background: "#1a7887", color: "#fff", border: "none",
//             borderRadius: "0.75rem", padding: "0.75rem 1.4rem",
//             fontWeight: 700, fontSize: "0.9rem",
//             cursor: loading ? "not-allowed" : "pointer",
//             opacity: loading ? 0.7 : 1, transition: "opacity .2s",
//           }}
//         >
//           {loading
//             ? <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Locating…</>
//             : <><Navigation size={16} /> Show My Location</>}
//         </button>

//         <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", fontSize: "0.8rem", color: "#6b7280" }}>
//           <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
//             <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#1a7887", display: "inline-block" }} />
//             SFL Clinic
//           </span>
//           {userLat && (
//             <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
//               <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#F39200", display: "inline-block" }} />
//               Your Location
//             </span>
//           )}
//         </div>

//         {userLat && userLng && (
//           <span style={{ fontSize: "0.82rem", color: "#1a7887", fontWeight: 600 }}>
//             📍 Nearest: {sorted[0]?.centre_name} ({haversine(userLat, userLng, sorted[0].lat, sorted[0].lng).toFixed(1)} km)
//           </span>
//         )}
//         {error && <span style={{ fontSize: "0.82rem", color: "#ef4444" }}>{error}</span>}
//       </div>

//       {/* ── Map + Panel ── */}
//       <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "0", borderRadius: "1rem", overflow: "hidden", border: "1.5px solid #e8e2db", height: 520 }}>

//         {/* Side Panel */}
//         <div ref={listRef} style={{ overflowY: "auto", background: "#fff", borderRight: "1px solid #e8e2db" }}>
//           <div style={{ padding: "12px 14px", borderBottom: "1px solid #f0ede8", background: "#f9f7f4" }}>
//             <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#9a9890", margin: 0 }}>
//               {userLat ? `All ${clinics.length} centres · sorted by distance` : `All ${clinics.length} centres`}
//             </p>
//           </div>

//           {sorted.map((c, i) => {
//             const dist = userLat !== null && userLng !== null
//               ? haversine(userLat, userLng, c.lat, c.lng)
//               : null;
//             const isActive = activeIdx === i;
//             return (
//               <div
//                 key={c.centre_name + c.lat}
//                 id={`clinic-item-${i}`}
//                 onClick={() => handleSelectCentre(c, i)}
//                 style={{
//                   padding: "11px 14px",
//                   borderBottom: "1px solid #f0ede8",
//                   cursor: "pointer",
//                   background: isActive ? "#e8f6f4" : "#fff",
//                   borderLeft: isActive ? "3px solid #1a7887" : "3px solid transparent",
//                   transition: "background .15s",
//                 }}
//               >
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
//                   <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#1a1917", lineHeight: 1.3 }}>
//                     SFL — {c.centre_name}
//                   </span>
//                   {dist !== null && (
//                     <span style={{
//                       fontSize: "10px", background: "#e8f6f4", color: "#1a7887",
//                       padding: "2px 7px", borderRadius: 20, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0,
//                     }}>
//                       {dist.toFixed(1)} km
//                     </span>
//                   )}
//                 </div>
//                 <p style={{ fontSize: "11px", color: "#6b7280", margin: "3px 0 8px", lineHeight: 1.5 }}>
//                   {c.address}
//                 </p>
//                 <div style={{ display: "flex", gap: 6 }}>
//                   <button
//                     onClick={(e) => { e.stopPropagation(); openModal(c); }}
//                     style={{
//                       display: "inline-flex", alignItems: "center", gap: 4,
//                       background: "#1a7887", color: "#fff", border: "none",
//                       borderRadius: 6, padding: "5px 10px", fontSize: "11px",
//                       fontWeight: 600, cursor: "pointer",
//                     }}
//                   >
//                     <Calendar size={11} /> Book
//                   </button>
//                   <a
//                     href={`https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lng}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={(e) => e.stopPropagation()}
//                     style={{
//                       display: "inline-flex", alignItems: "center", gap: 4,
//                       background: "transparent", color: "#6b7280",
//                       border: "1px solid #e0ddd5", borderRadius: 6,
//                       padding: "5px 10px", fontSize: "11px", fontWeight: 500,
//                       cursor: "pointer", textDecoration: "none",
//                     }}
//                   >
//                     <ExternalLink size={11} /> Directions
//                   </a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Map */}
//         <MapContainer
//           center={[22.5, 78.9]}
//           zoom={5}
//           style={{ height: "100%", width: "100%" }}
//           scrollWheelZoom
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {clinics.map((c) => (
//             <Marker key={c.centre_name + c.lat} position={[c.lat, c.lng]} icon={clinicIcon}>
//               <Popup>
//                 <div style={{ minWidth: 220 }}>
//                   <strong style={{ fontSize: 13 }}>SFL – {c.centre_name}</strong>
//                   <p style={{ fontSize: "0.78rem", color: "#374151", margin: "4px 0 10px", lineHeight: 1.5 }}>{c.address}</p>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <button
//                       onClick={() => openModal(c)}
//                       style={{
//                         background: "#1a7887", color: "#fff", border: "none",
//                         borderRadius: 6, padding: "6px 12px", fontSize: 12,
//                         fontWeight: 600, cursor: "pointer",
//                       }}
//                     >
//                       Book Appointment
//                     </button>
//                     <a
//                       href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{
//                         display: "inline-flex", alignItems: "center", gap: 4,
//                         background: "#f3f4f6", color: "#374151", border: "1px solid #e0ddd5",
//                         borderRadius: 6, padding: "6px 10px", fontSize: 12,
//                         fontWeight: 500, textDecoration: "none",
//                       }}
//                     >
//                       Maps
//                     </a>
//                   </div>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}

//           {userLat !== null && userLng !== null && (
//             <>
//               <FlyToUser lat={userLat} lng={userLng} />
//               <Marker position={[userLat, userLng]} icon={userIcon}>
//                 <Popup>📍 You are here</Popup>
//               </Marker>
//             </>
//           )}

//           {focusCentre && <FlyToCentre centre={focusCentre} />}
//         </MapContainer>
//       </div>

//       {/* ── Booking Modal ── */}
//       {modalCentre && (
//         <div
//           onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
//           style={{
//             position: "fixed", inset: 0, background: "rgba(10,20,17,.55)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             zIndex: 2000, padding: 16,
//           }}
//         >
//           <div style={{
//             background: "#fff", borderRadius: 16, width: "100%", maxWidth: 480,
//             maxHeight: "90vh", overflowY: "auto",
//             boxShadow: "0 20px 60px rgba(0,0,0,.18)",
//           }}>
//             {/* Modal header */}
//             <div style={{
//               display: "flex", alignItems: "center", justifyContent: "space-between",
//               padding: "18px 22px 14px", borderBottom: "1px solid #f0ede8",
//               position: "sticky", top: 0, background: "#fff", zIndex: 1,
//             }}>
//               <span style={{ fontSize: 18, fontWeight: 700, color: "#1a1917" }}>Book Appointment</span>
//               <button onClick={closeModal} style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", display: "flex", alignItems: "center", padding: 4 }}>
//                 <X size={20} />
//               </button>
//             </div>

//             <div style={{ padding: "18px 22px 22px" }}>
//               {submitted ? (
//                 /* ── Success ── */
//                 <div style={{ textAlign: "center", padding: "24px 8px" }}>
//                   <div style={{
//                     width: 60, height: 60, borderRadius: "50%",
//                     background: "#e8f6f4", display: "flex", alignItems: "center",
//                     justifyContent: "center", margin: "0 auto 14px",
//                   }}>
//                     <CheckCircle size={28} color="#1a7887" />
//                   </div>
//                   <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Appointment Requested!</h3>
//                   <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: "0 0 20px" }}>
//                     Thank you, <strong>{form.firstName}</strong>!<br />
//                     Your request at <strong>SFL — {modalCentre.centre_name}</strong><br />
//                     on <strong>{form.date}</strong> at <strong>{form.slot}</strong> has been received.<br />
//                     A confirmation will be sent to <strong>{form.phone}</strong>.
//                   </p>
//                   <button onClick={closeModal} style={{
//                     background: "#1a7887", color: "#fff", border: "none",
//                     borderRadius: 8, padding: "10px 28px", fontSize: 14,
//                     fontWeight: 600, cursor: "pointer",
//                   }}>Done</button>
//                 </div>
//               ) : (
//                 /* ── Form ── */
//                 <>
//                   {/* Centre tag */}
//                   <div style={{
//                     background: "#e8f6f4", border: "1px solid #9FE1CB",
//                     borderRadius: 10, padding: "10px 14px", marginBottom: 18,
//                   }}>
//                     <div style={{ fontSize: 13, fontWeight: 700, color: "#1a7887" }}>SFL — {modalCentre.centre_name}</div>
//                     <div style={{ fontSize: 11.5, color: "#374151", marginTop: 2 }}>{modalCentre.address}</div>
//                   </div>

//                   {/* Name row */}
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
//                     {[
//                       { label: "First name", key: "firstName", placeholder: "Rahul", type: "text" },
//                       { label: "Last name",  key: "lastName",  placeholder: "Sharma", type: "text" },
//                     ].map(({ label, key, placeholder, type }) => (
//                       <div key={key}>
//                         <label style={labelStyle}>{label}</label>
//                         <input
//                           type={type}
//                           placeholder={placeholder}
//                           value={form[key as keyof BookingForm]}
//                           onChange={(e) => setForm({ ...form, [key]: e.target.value })}
//                           style={inputStyle}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   {/* Phone */}
//                   <div style={{ marginBottom: 12 }}>
//                     <label style={labelStyle}>Phone number</label>
//                     <input
//                       type="tel" placeholder="+91 98765 43210"
//                       value={form.phone}
//                       onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                       style={inputStyle}
//                     />
//                   </div>

//                   {/* Email */}
//                   <div style={{ marginBottom: 12 }}>
//                     <label style={labelStyle}>Email address</label>
//                     <input
//                       type="email" placeholder="rahul@email.com"
//                       value={form.email}
//                       onChange={(e) => setForm({ ...form, email: e.target.value })}
//                       style={inputStyle}
//                     />
//                   </div>

//                   {/* Date + Slot */}
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
//                     <div>
//                       <label style={labelStyle}>Preferred date</label>
//                       <input
//                         type="date" min={today}
//                         value={form.date}
//                         onChange={(e) => setForm({ ...form, date: e.target.value })}
//                         style={inputStyle}
//                       />
//                     </div>
//                     <div>
//                       <label style={labelStyle}>Time slot</label>
//                       <select
//                         value={form.slot}
//                         onChange={(e) => setForm({ ...form, slot: e.target.value })}
//                         style={inputStyle}
//                       >
//                         <option value="">Select a slot</option>
//                         {TIME_SLOTS.map((s) => <option key={s}>{s}</option>)}
//                       </select>
//                     </div>
//                   </div>

//                   {/* City — pre-filled read-only */}
//                   <div style={{ marginBottom: 12 }}>
//                     <label style={labelStyle}>City</label>
//                     <input
//                       type="text"
//                       value={form.city}
//                       readOnly
//                       style={{ ...inputStyle, background: "#f3f4f6", color: "#1a7887", fontWeight: 600, cursor: "default" }}
//                     />
//                   </div>

//                   {/* Test required */}
//                   <div style={{ marginBottom: 16 }}>
//                     <label style={labelStyle}>Test / service required</label>
//                     <input
//                       type="text" placeholder="e.g. Full body checkup, CBC, HbA1c…"
//                       value={form.test}
//                       onChange={(e) => setForm({ ...form, test: e.target.value })}
//                       style={inputStyle}
//                     />
//                   </div>

//                   {formError && (
//                     <p style={{ fontSize: 12, color: "#ef4444", marginBottom: 10 }}>{formError}</p>
//                   )}

//                   <button
//                     onClick={handleSubmit}
//                     style={{
//                       width: "100%", background: "#1a7887", color: "#fff",
//                       border: "none", borderRadius: 10, padding: "13px",
//                       fontSize: 14, fontWeight: 700, cursor: "pointer",
//                       transition: "background .2s",
//                     }}
//                   >
//                     Confirm Appointment →
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes spin  { to { transform: rotate(360deg); } }
//         @keyframes pulse { 0%,100% { transform:scale(1);opacity:0.6; } 50% { transform:scale(2.2);opacity:0; } }
//       `}</style>
//     </div>
//   );
// }

// /* ── Shared input styles ── */
// const labelStyle: React.CSSProperties = {
//   display: "block",
//   fontSize: 11,
//   fontWeight: 700,
//   letterSpacing: "0.06em",
//   textTransform: "uppercase",
//   color: "#6b7280",
//   marginBottom: 5,
// };

// const inputStyle: React.CSSProperties = {
//   width: "100%",
//   padding: "9px 12px",
//   border: "1px solid #e0ddd5",
//   borderRadius: 8,
//   fontFamily: "inherit",
//   fontSize: 13,
//   color: "#1a1917",
//   background: "#fff",
//   outline: "none",
//   appearance: "none",
// };