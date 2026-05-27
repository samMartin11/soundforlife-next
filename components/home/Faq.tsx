import { ChevronDown } from "lucide-react";
import s from "./Faq.module.css";

const FAQS = [
  {
    q: "How much does a hearing aid cost?",
    a: "Hearing aids range from ₹25,000 to ₹3,00,000+ depending on the brand, technology level, and features. We help you find the best option within your budget — with no pressure to overspend.",
  },
  {
    q: "Is the trial really free? Any hidden costs?",
    a: "Yes, completely free. A certified audiologist visits your home, conducts a hearing test, and lets you trial the recommended hearing aid for 7 days — zero cost, zero commitment, zero hidden fees.",
  },
  {
    q: "Do I need a prescription or audiogram?",
    a: "No prior audiogram or prescription needed. Our audiologist conducts a full hearing evaluation during the home visit and recommends the right solution based on your results.",
  },
  {
    q: "Are modern hearing aids visible?",
    a: "Today's hearing aids are remarkably discreet. Many models sit completely inside the ear canal and are virtually invisible. We'll show you options that match your comfort and aesthetic preferences.",
  },
  {
    q: "How long does the battery last?",
    a: "Rechargeable hearing aids typically last a full day (16–24 hours) on a single charge. Disposable battery models last 5–14 days depending on usage.",
  },
  {
    q: "What about warranty and service?",
    a: "All hearing aids come with manufacturer warranty (1–3 years). We also provide lifetime free follow-up visits, cleaning, and fine-tuning at any of our 50+ clinics across India.",
  },
  {
    q: "Which cities do you serve?",
    a: "We currently serve 50+ cities across India, including Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune, and more. Enter your city when booking and we'll confirm availability instantly.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <h2>
            Questions?{" "}
            <span className={s.accent}>We have answers.</span>
          </h2>
          <p className={s.subtitle}>No pressure. No hidden costs. Just clarity.</p>
        </div>

        <div className={s.list}>
          {FAQS.map((faq) => (
            <details key={faq.q} className={s.item}>
              <summary className={s.summary}>
                <span>{faq.q}</span>
                <ChevronDown size={20} className={s.chevron} />
              </summary>
              <p className={s.answer}>{faq.a}</p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
