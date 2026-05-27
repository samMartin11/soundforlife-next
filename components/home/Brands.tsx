import Link from "next/link";
import s from "./Brands.module.css";

const BRANDS = [
  { name: "Signia",  status: "Privileged Partner", href: "/signia-hearing-aids",  color: "#3B8BEB" },
  { name: "Phonak",  status: "Authorised",          href: "/phonak-hearing-aids",  color: "#F59E0B" },
  { name: "Unitron", status: "Authorised",          href: "/unitron-hearing-aids", color: "#10B981" },
  { name: "ReSound", status: "Authorised",          href: "/resound-hearing-aids", color: "#F43F5E" },
  { name: "Sonic",   status: "Authorised",          href: "/sonic-hearing-aids",   color: "#8B5CF6" },
  { name: "A&M",     status: "Authorised",          href: "#",                     color: "#6B7280" },
];

function SpeakerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export default function Brands() {
  return (
    <section id="brands" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <h2>
            All top global brands.{" "}
            <span className={s.accent}>Under one roof.</span>
          </h2>
          <p className={s.subtitle}>
            Tap any brand to learn more — we recommend what&apos;s right for YOU.
          </p>
        </div>

        <div className={s.grid}>
          {BRANDS.map((brand) => (
            <Link key={brand.name} href={brand.href} className={s.brandCard}>
              <div className={s.iconWrap} style={{ background: brand.color }}>
                <SpeakerIcon />
              </div>
              <span className={s.brandName}>{brand.name}</span>
              <span className={s.brandStatus}>{brand.status}</span>
              <span className={s.viewDetails}>View details &rarr;</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
