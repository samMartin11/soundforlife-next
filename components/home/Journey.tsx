import { Stethoscope, Headphones, HeartHandshake } from "lucide-react";
import s from "./Journey.module.css";

const STEPS = [
  {
    num: "01",
    icon: Stethoscope,
    title: "Free Consultation",
    desc: "A certified audiologist visits you at home OR at our clinic — your choice. Get a comprehensive hearing screening, completely free.",
  },
  {
    num: "02",
    icon: Headphones,
    title: "7-Day Home Trial",
    desc: "Wear premium hearing aids for 7 days at home, work, dinners. Hear the difference yourself before you decide.",
  },
  {
    num: "03",
    icon: HeartHandshake,
    title: "Lifetime Care",
    desc: "Free fine-tuning, cleaning, software updates, and ongoing support. We're with you for life — Sunne Ki Azaadi.",
  },
];

export default function Journey() {
  return (
    <section id="how-it-works" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <h2>Your journey to better hearing</h2>
          <p className={s.subtitle}>Simple. Personal. Risk-free.</p>
        </div>

        <div className={s.grid}>
          {STEPS.map((step) => (
            <div key={step.num} className={s.card}>
              <div className={s.cardTop}>
                <div className={s.iconBox}>
                  <step.icon size={22} />
                </div>
                <span aria-hidden className={s.bigNum}>{step.num}</span>
              </div>
              <p className={s.title}>{step.title}</p>
              <p className={s.desc}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
