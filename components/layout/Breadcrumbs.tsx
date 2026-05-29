"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import s from "./Breadcrumbs.module.css";

const LABELS: Record<string, string> = {
  "hearing-solutions":      "Hearing Solutions",
  "hearing-aids":           "Hearing Aids",
  "types-styles":           "Types & Styles",
  rechargeable:             "Rechargeable",
  invisible:                "Invisible",
  bluetooth:                "Bluetooth",
  prices:                   "Prices",
  "why-soundforlife":       "Why SoundForLife",
  "about-us":               "About Us",
  "our-audiologists":       "Our Audiologists",
  "free-trial":             "Free Trial",
  "aftercare-warranty":     "Aftercare & Warranty",
  "hearing-health":         "Hearing Health",
  "signs-of-hearing-loss":  "Signs of Hearing Loss",
  tinnitus:                 "Tinnitus",
  faq:                      "FAQ",
  offers:                   "Offers",
  "current-deals":          "Current Deals",
  "emi-financing":          "EMI & Financing",
  "insurance-help":         "Insurance & Government Schemes",
  "hearing-aid-centres":    "Hearing Aid Centres",
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.soundforlife.in";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't render on homepage
  if (pathname === "/") return null;

  const segments = pathname.replace(/\/$/, "").split("/").filter(Boolean);

  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, i) => ({
      label: LABELS[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: "/" + segments.slice(0, i + 1).join("/") + "/",
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      // Google prefers absolute URLs for breadcrumb schema
      "item": crumb.href === "/" ? SITE_URL : `${SITE_URL}${crumb.href}`,
    })),
  };
  
  return (
    <nav aria-label="Breadcrumb" style={{
      position: "sticky",
      top: " var(--header-height)",
      padding: "10px 24px",
      background: "var(--color-bg-soft)",
      borderBottom: "1px solid var(--color-border)",
    }}>
      {<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />}
      <ol style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "4px",
        listStyle: "none",
        margin: 0,
        padding: 0,
        fontSize: "0.8rem",
        color: "var(--color-muted)",
        maxWidth: "1280px",
      }}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.href} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {i > 0 && <ChevronRight size={12} style={{ color: "var(--color-border)", flexShrink: 0 }} />}
              {isLast ? (
                <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} style={{ color: "var(--color-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
