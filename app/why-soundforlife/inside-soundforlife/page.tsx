import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Award, Users, TrendingUp, Mic, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Inside SoundForLife – Press & Media Center | SFL Hearing Solutions",
  description:
    "The official PR and media center for SoundForLife Hearing Solutions. Explore press releases, media coverage, awards, leadership insights, and brand milestones.",
};

const PRESS_RELEASES = [
  {
    date: "April 2026",
    title: "SoundForLife Crosses 50 Clinics Across India",
    summary:
      "SFL Hearing Solutions expands its PAN-India network to 50+ certified clinics, making professional hearing care accessible to millions more.",
    tag: "Expansion",
  },
  {
    date: "January 2026",
    title: "SFL Launches India's First Hearing Aid Home-Trial Programme",
    summary:
      "A first-of-its-kind initiative allowing patients to trial premium hearing aids at home for 7 days, completely free and obligation-free.",
    tag: "Product",
  },
  {
    date: "October 2025",
    title: "SoundForLife Partners with Phonak for Exclusive Lumity Range",
    summary:
      "Strategic partnership brings the award-winning Phonak Lumity series exclusively through SFL clinics across India.",
    tag: "Partnership",
  },
];

const MEDIA_COVERAGE = [
  { outlet: "Economic Times", headline: "How SoundForLife is Democratising Hearing Healthcare in India", year: "2026" },
  { outlet: "Hindustan Times", headline: "The Startup Giving 2 Crore Indians Their Hearing Back", year: "2025" },
  { outlet: "Inc42", headline: "SFL's Multi-Brand Model: A Blueprint for Healthcare Retail", year: "2025" },
  { outlet: "YourStory", headline: "From One Clinic to 50: The SoundForLife Story", year: "2025" },
];

const AWARDS = [
  { year: "2026", title: "Best Hearing Care Chain – India Health Awards" },
  { year: "2025", title: "Most Trusted Hearing Brand – Consumer Survey, Nielsen" },
  { year: "2025", title: "Top 50 Healthcare Startups – Inc42" },
  { year: "2024", title: "Excellence in Audiology Services – AIISH Recognition" },
];

const TAG_COLORS: Record<string, string> = {
  Expansion: "#1a9fa0",
  Product: "#3B8BEB",
  Partnership: "#7c3aed",
};

export default function InsideSoundForLifePage() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0b1a2e 0%, #0e2a4a 100%)", padding: "80px 1.5rem 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#1a9fa0", fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            Press &amp; Media Center
          </p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            Inside SoundForLife
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 36px" }}>
            News, milestones, media coverage, and the story behind India&apos;s largest multi-brand hearing care network.
          </p>
          <a
            href="mailto:media@soundforlife.in"
            style={{
              display: "inline-block",
              background: "#1a9fa0",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            Media Enquiries
          </a>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 1.5rem" }}>

        {/* Quick stats */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 64 }}>
          {[
            { icon: <Users size={24} />, value: "50+", label: "Clinics PAN India" },
            { icon: <TrendingUp size={24} />, value: "2L+", label: "Lives Transformed" },
            { icon: <Award size={24} />, value: "10+", label: "Years of Excellence" },
            { icon: <Mic size={24} />, value: "6+", label: "Premium Brands" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "28px 20px",
                textAlign: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
              }}
            >
              <div style={{ color: "#1a9fa0", display: "flex", justifyContent: "center", marginBottom: 10 }}>{s.icon}</div>
              <p style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0b1a2e", margin: 0 }}>{s.value}</p>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </section>

        {/* Press Releases */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <FileText size={20} color="#1a9fa0" />
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0b1a2e", margin: 0 }}>Press Releases</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRESS_RELEASES.map((pr) => (
              <article
                key={pr.title}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "24px 28px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                  borderLeft: `4px solid ${TAG_COLORS[pr.tag] ?? "#1a9fa0"}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span
                    style={{
                      background: TAG_COLORS[pr.tag] ?? "#1a9fa0",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "2px 10px",
                      borderRadius: 99,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {pr.tag}
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: "0.82rem" }}>{pr.date}</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0b1a2e", margin: "0 0 8px" }}>{pr.title}</h3>
                <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{pr.summary}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Media Coverage */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <Newspaper size={20} color="#1a9fa0" />
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0b1a2e", margin: 0 }}>Media Coverage</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {MEDIA_COVERAGE.map((item) => (
              <div
                key={item.headline}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 22px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                }}
              >
                <p style={{ color: "#1a9fa0", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                  {item.outlet} &middot; {item.year}
                </p>
                <p style={{ color: "#1e293b", fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{item.headline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <Award size={20} color="#1a9fa0" />
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0b1a2e", margin: 0 }}>Awards &amp; Recognition</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {AWARDS.map((a) => (
              <div
                key={a.title}
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  padding: "16px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <span style={{ background: "#f0fdf4", color: "#16a34a", fontWeight: 800, fontSize: "0.85rem", borderRadius: 8, padding: "4px 12px", flexShrink: 0 }}>
                  {a.year}
                </span>
                <p style={{ color: "#1e293b", fontWeight: 600, fontSize: "0.92rem", margin: 0 }}>{a.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media Kit CTA */}
        <section
          style={{
            background: "linear-gradient(135deg, #0b1a2e, #0e2a4a)",
            borderRadius: 16,
            padding: "48px 36px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12 }}>Need Our Media Kit?</h2>
          <p style={{ color: "#94a3b8", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            High-res logos, brand guidelines, leadership photos, and fact sheets — available on request.
          </p>
          <a
            href="mailto:media@soundforlife.in"
            style={{
              display: "inline-block",
              background: "#1a9fa0",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Request Media Kit
          </a>
        </section>

      </div>
    </main>
  );
}
