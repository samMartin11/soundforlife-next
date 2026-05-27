"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface SubPage {
  label: string;
  href: string;
  description?: string;
}

interface InfoPageProps {
  tag?: string;
  title: string;
  description: string;
  faqs: FaqItem[];
  subPages?: SubPage[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function InfoPage({
  tag,
  title,
  description,
  faqs,
  subPages,
  ctaLabel = "Book Free Hearing Test",
  ctaHref = "/book-appointment",
}: InfoPageProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0b1a2e 0%, #0e2a4a 100%)", padding: "80px 1.5rem 64px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          {tag && (
            <p style={{ color: "#1a9fa0", fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
              {tag}
            </p>
          )}
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 18 }}>
            {title}
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto 36px" }}>
            {description}
          </p>
          <Link
            href={ctaHref}
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
            {ctaLabel}
          </Link>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 1.5rem" }}>

        {/* Sub-pages grid (hub pages) */}
        {subPages && subPages.length > 0 && (
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0b1a2e", marginBottom: 24 }}>
              Explore This Section
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {subPages.map((sp) => (
                <Link
                  key={sp.href}
                  href={sp.href}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "20px 22px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                    borderLeft: "3px solid #1a9fa0",
                  }}
                >
                  <div>
                    <p style={{ color: "#0b1a2e", fontWeight: 700, fontSize: "0.92rem", margin: 0 }}>{sp.label}</p>
                    {sp.description && (
                      <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: 4, marginBottom: 0 }}>{sp.description}</p>
                    )}
                  </div>
                  <ArrowRight size={16} color="#1a9fa0" style={{ flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0b1a2e", marginBottom: 24 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    padding: "18px 22px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: "#1e293b", fontWeight: 600, fontSize: "0.92rem", lineHeight: 1.45 }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#1a9fa0"
                    style={{
                      flexShrink: 0,
                      transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {open === i && (
                  <div style={{ padding: "0 22px 18px", color: "#475569", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
