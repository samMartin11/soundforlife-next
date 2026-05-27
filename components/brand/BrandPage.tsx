import Link from "next/link";
import { CheckCircle2, ShieldCheck, Star, Headphones, ArrowRight, Phone } from "lucide-react";
import s from "./BrandPage.module.css";

export interface BrandData {
  name: string;
  status: string;
  tagline: string;
  color: string;
  startingPrice: string;
  emi: string;
  features: string[];
}

function SpeakerIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export default function BrandPage({ brand }: { brand: BrandData }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className={s.hero}>
        <div className={s.heroInner}>

          {/* Left */}
          <div>
            <div className={s.badge}>✦ {brand.status}</div>

            <h1 className={s.title}>
              {brand.name} <span className={s.titleAccent}>at SFL</span>
            </h1>

            <p className={s.tagline}>&ldquo;{brand.tagline}&rdquo;</p>

            <div className={s.trustRow}>
              <span className={s.trustItem}>
                <CheckCircle2 size={16} className={s.trustIcon} />
                100% Risk-Free Trial
              </span>
              <span className={s.trustItem}>
                <ShieldCheck size={16} className={s.trustIcon} />
                Manufacturer Warranty
              </span>
            </div>

            <div className={s.actions}>
              <Link href="/book-appointment" className={s.btnPrimary}>
                Try {brand.name} Free for 7 Days <ArrowRight size={16} />
              </Link>
              <a href="tel:+919015401540" className={s.btnOutline}>
                <Phone size={16} /> Speak to Audiologist
              </a>
            </div>

            <div className={s.priceBox}>
              <p className={s.priceLabel}>Starting From</p>
              <div>
                <span className={s.price}>₹{brand.startingPrice}</span>
                <span className={s.priceSuffix}>/ pair</span>
              </div>
              <p className={s.emi}>EMI from ₹{brand.emi}/mo</p>
            </div>
          </div>

          {/* Right: brand card */}
          <div className={s.heroCard}>
            <div className={s.brandIcon} style={{ background: brand.color }}>
              <SpeakerIcon />
            </div>
            <p className={s.heroCardName}>{brand.name}</p>
            <p className={s.heroCardSub}>Premium Hearing Technology</p>
            <div className={s.heroStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Features ── */}
      <section className={s.features}>
        <div className={s.featuresInner}>
          <h2 className={s.featuresTitle}>
            Why choose <span className={s.featuresAccent}>{brand.name}</span>?
          </h2>
          <div className={s.featureGrid}>
            {brand.features.map((f) => (
              <div key={f} className={s.featureItem}>
                <CheckCircle2 size={20} className={s.checkIcon} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={s.cta}>
        <div className={s.ctaInner}>
          <Headphones size={40} className={s.ctaIcon} />
          <h2 className={s.ctaTitle}>
            Try {brand.name} <span className={s.ctaAccent}>FREE</span> at home.
          </h2>
          <p className={s.ctaBody}>
            Wear it for 7 days. Hear the difference yourself. No commitment, no payment to start.
          </p>
          <Link href="/#hearing-test" className={s.ctaBtn}>
            Claim My Free Trial Now
          </Link>
        </div>
      </section>
    </>
  );
}
