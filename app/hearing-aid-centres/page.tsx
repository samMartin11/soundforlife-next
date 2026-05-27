"use client";

import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const ClinicFinder = dynamic(() => import("@/components/ClinicFinder"), { ssr: false });

export default function HearingAidCentresPage() {
  return (
    <main style={{ background: "#f8f5ef", minHeight: "100vh", paddingBlock: "clamp(3rem,6vw,5rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingInline: "clamp(1.25rem,4vw,2.5rem)" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#e8f5f6", color: "#1a7887", border: "1px solid #b2dfe4",
            borderRadius: 9999, padding: "0.35rem 1rem", fontSize: "0.78rem", fontWeight: 600,
            marginBottom: "1rem",
          }}>
            <MapPin size={13} /> 50+ Locations PAN India
          </span>
          <h1 style={{ fontSize: "clamp(1.8rem,3.5vw,2.75rem)", fontWeight: 800, color: "#0b1724", marginBottom: "0.75rem" }}>
            Find a Clinic <span style={{ color: "#1a7887" }}>Near You</span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>
            Click &ldquo;Use My Location&rdquo; to find the nearest SFL clinic — or pick any city from the list.
          </p>
        </div>

        <ClinicFinder />

      </div>
    </main>
  );
}
