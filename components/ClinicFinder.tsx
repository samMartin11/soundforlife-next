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
