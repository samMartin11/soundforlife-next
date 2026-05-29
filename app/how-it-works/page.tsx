"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import s from "./HowitWorks.module.css"; // Import the CSS module

const audiences = [
  { id: "children", label: "Children", emoji: "🧒", age: "0–18" },
  { id: "professional", label: "Professionals", emoji: "💼", age: "22–55" },
  { id: "senior", label: "Seniors", emoji: "🌿", age: "60+" },
] as const;

type AudienceId = typeof audiences[number]["id"];

// Data Object (Using raw HEX codes so CSS variables can use them)
const content = {
  children: {
    theme: { accent: "#2563EB", light: "#EFF6FF", shadow: "rgba(37,99,235,0.2)" },
    headline: "Is your child missing words in class?",
    subheadline:
      "1 in 7 school children in India has some degree of hearing loss — most parents don't know. Ear infections are the leading cause, and they're treatable. Early action protects your child's speech, learning, and confidence.",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentBorder: "#BFDBFE",
    statBadge: "14% of Indian school children have hearing loss",
    steps: [
      {
        number: "01",
        icon: "🎯",
        title: "Free Pediatric Hearing Screening",
        desc: "A calm, child-friendly hearing test — no pain, no noise, no fear. Works for all ages including infants and toddlers. Many causes like ear wax and ear infections are fully reversible when caught early.",
        badge: "Walk in, no appointment needed",
      },
      {
        number: "02",
        icon: "👨‍👩‍👧",
        title: "Clear Explanation for Parents",
        desc: "We explain your child's results in simple language — no medical jargon. You'll know exactly what's happening, whether it needs treatment, and how it may be affecting their speech or school performance.",
        badge: "Bring the whole family",
      },
      {
        number: "03",
        icon: "🎨",
        title: "Child-Friendly Hearing Aid Fitting",
        desc: "If needed, we fit hearing devices designed for active children — durable, comfortable, available in fun colours. We test them in real settings: classroom noise, music, playground chatter.",
        badge: "Free trial period",
      },
      {
        number: "04",
        icon: "🏫",
        title: "School & Home Support Plan",
        desc: "We give you a written plan to share with your child's teacher. Regular follow-ups are scheduled as your child grows. You are never left to figure this out alone.",
        badge: "Ongoing care included",
      },
    ],
    warningTitle: "Signs parents often miss:",
    warnings: [
      "Says 'huh?' or 'what?' very often",
      "Speaks louder than other children",
      "Struggles to follow instructions in noisy rooms",
      "Delayed speech compared to peers",
      "Frequent ear infections or ear pain",
    ],
    cta: "Book a Free Hearing Check",
    trust: [
      "Pediatric-trained audiologists",
      "Results explained clearly",
      "School support guidance",
      "₹0 for initial screening",
    ],
  },
 
  professional: {
    theme: { accent: "#0D9488", light: "#F0FDFA", shadow: "rgba(13,148,136,0.2)" },
    headline: "Earphones all day. Meetings you struggle to follow.",
    subheadline:
      "AIIMS doctors warn that noise-induced hearing loss is rising fast among Indian professionals in their 20s and 30s. 6 out of 10 young adults in metro cities show early warning signs. The damage is silent, gradual, and permanent if ignored.",
    accent: "#0F766E",
    accentLight: "#F0FDFA",
    accentBorder: "#99F6E4",
    statBadge: "60% of urban 20–30 year olds show early hearing strain",
    steps: [
      {
        number: "01",
        icon: "⚡",
        title: "Free Hearing Check in Under 60 Minutes",
        desc: "Walk into any of our 50+ centres across Delhi, Noida, Gurugram, Chandigarh, Bengaluru, Mumbai and more. No long waits. Get a clear audiogram report to keep.",
        badge: "Walk-in welcome, no appointment",
      },
      {
        number: "02",
        icon: "🎧",
        title: "Consultation Built Around Your Work",
        desc: "Tell us how you work — long Zoom calls, open-plan offices, client meetings, commuting with earphones. We identify what's affecting you most and recommend solutions for your daily routine.",
        badge: "Tailored to your work life",
      },
      {
        number: "03",
        icon: "🏢",
        title: "Real-World Trial at Your Workplace",
        desc: "Take modern, discreet hearing aids to your actual workplace for a free trial. Experience the difference on calls, in meetings, in noisy canteens. Invisible-in-ear options available.",
        badge: "Discreet & invisible options",
      },
      {
        number: "04",
        icon: "📱",
        title: "Smartphone App & Bluetooth Setup",
        desc: "Your hearing aid pairs directly with your phone. Control volume for calls, Teams, Zoom, or YouTube. Compatible with iPhone and Android. We set everything up before you leave.",
        badge: "Works with iPhone & Android",
      },
    ],
    warningTitle: "Early signs you should not ignore:",
    warnings: [
      "Ringing or buzzing in ears after calls (tinnitus)",
      "Asking colleagues to repeat themselves often",
      "Turning up phone or laptop volume higher than before",
      "Struggling to hear in noisy restaurants or offices",
      "Feeling tired after long conversations",
    ],
    cta: "Book a Free Consultation",
    trust: [
      "50+ centres across India",
      "Same-day fitting available",
      "EMI from ₹999/month",
      "Invisible hearing aid options",
    ],
  },
 
  senior: {
    theme: { accent: "#9333EA", light: "#FAF5FF", shadow: "rgba(147,51,234,0.2)" },
    headline: '"I can hear — I just can\'t understand what people are saying."',
    subheadline:
      "This is the most common experience for elderly Indians. Over 62% of senior citizens have age-related hearing loss. Left untreated, it leads to loneliness and is now linked to a significantly higher risk of depression and dementia.",
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentBorder: "#DDD6FE",
    statBadge: "62% of elderly Indians have age-related hearing loss",
    steps: [
      {
        number: "01",
        icon: "🏠",
        title: "We Come to You — Home Visits Available",
        desc: "If travelling is difficult, our audiologist can visit your home. No rush. Bring your son, daughter, or any family member — we encourage it. We speak slowly and clearly.",
        badge: "Home visit available",
      },
      {
        number: "02",
        icon: "🩺",
        title: "Thorough Hearing Assessment",
        desc: "A gentle, unhurried test to understand exactly which sounds and speech frequencies you are missing. We check for treatable causes like ear wax and tell you honestly what will help.",
        badge: "No rush, no pressure",
      },
      {
        number: "03",
        icon: "🔋",
        title: "Simple, Easy-to-Use Hearing Aids",
        desc: "Rechargeable models available — no tiny batteries to fumble with. Large controls or app-based. We don't leave until you are comfortable using it yourself.",
        badge: "Rechargeable, no batteries",
      },
      {
        number: "04",
        icon: "📞",
        title: "Regular Follow-ups & Lifetime Support",
        desc: "Adjusting to hearing aids takes 4 to 6 weeks. We schedule follow-ups as needed. Our support line is available 6 days a week. Your family can call us too.",
        badge: "6-day support line",
      },
    ],
    warningTitle: "Family members often notice first:",
    warnings: [
      "TV volume is always very high",
      "Misunderstands conversations or responds off-topic",
      "Avoids phone calls or family gatherings",
      "Seems more withdrawn or irritable",
      "Asks you to repeat things constantly",
    ],
    cta: "Book a Free Hearing Consultation",
    trust: [
      "Home visits available",
      "Family members welcome",
      "Senior-friendly pricing & EMI",
      "Rechargeable aids in stock",
    ],
  },
};

export default function HowItWorksPage() {
  const [active, setActive] = useState<AudienceId>("children");
  const data = content[active];

  // Map our data theme to CSS Variables dynamically
  const themeStyles = {
    "--accent": data.theme.accent,
    "--accent-light": data.theme.light,
    "--shadow-color": data.theme.shadow,
  } as React.CSSProperties;

  return (
    <main className={s.main} style={themeStyles}>
      
      {/* Tabs */}
      <div className={s.tabContainer}>
        <div className={s.tabList} role="tablist">
          {audiences.map((a) => (
            <button
              key={a.id}
              role="tab"
              aria-selected={active === a.id}
              onClick={() => setActive(a.id)}
              className={`${s.tab} ${active === a.id ? s.tabActive : ""}`}
            >
              <span className={s.tabEmoji}>{a.emoji}</span>
              <div>
                <div className={s.tabLabel}>{a.label}</div>
                <div className={s.tabAge}>Ages {a.age}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className={s.hero}>
        <h1 className={s.heroTitle}>Better hearing starts with one simple step</h1>
      </section>

      {/* Dynamic Content */}
          <div className={s.content} key={active}>
              <div className={s.sectionHeader}>
                  <span className={s.statBadge}>📊 {data.statBadge}</span>
                  <h2>{data.headline}</h2>
                  <p>{data.subheadline}</p>
              </div>
          </div>

        {/* Grid */}
        <div className={s.grid}>
          {data.steps.map((step) => (
            <div key={step.number} className={s.card}>
              <div className={s.cardHeader}>
                <span className={s.stepNum}>Step {step.number}</span>
                <span className={s.cardIcon}>{step.icon}</span>
              </div>
              <h3 className={s.cardTitle}>{step.title}</h3>
              <p className={s.cardDesc}>{step.desc}</p>
              <span className={s.cardBadge}><CheckCircle size={14} /> {step.badge}</span>
            </div>
          ))}
        </div>

        {/* Warnings */}
        <div className={s.warningBox}>
          <h3 className={s.warningTitle}><AlertTriangle /> {data.warningTitle}</h3>
          <ul className={s.warningList}>
            {data.warnings.map((w) => (
              <li key={w}><span style={{ color: "#f59e0b" }}>•</span> {w}</li>
            ))}
          </ul>
        </div>

        {/* Trust Pills */}
        <div className={s.trustGrid}>
          {data.trust.map((t) => (
            <div key={t} className={s.trustPill}>
              <CheckCircle size={16} color="var(--accent)" /> {t}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className={s.ctaBtn} >{data.cta}</button>
    </main>
  );
}