"use client";

import { Clock, CalendarDays, CheckCircle } from "lucide-react";
import { useBookingModal } from "@/components/BookingModal";
import s from "./FinalCta.module.css";

const TRUST = ["No payment to book", "No obligation to buy", "Calls within 30 min"];

export default function FinalCta() {
  const { openModal } = useBookingModal();
  return (
    <section className={s.section}>
      <div className={s.container}>

        <div className={s.badge}>
          <Clock size={14} />
          Limited Slots This Week
        </div>

        <h2 className={s.heading}>
          Don&apos;t let another{" "}
          <span className={s.accent}>family dinner</span>{" "}
          pass in silence.
        </h2>

        <p className={s.body}>
          Every day untreated, hearing loss takes more from you than sound. Take
          the first step today — it&apos;s free, it&apos;s at your home, and it changes everything.
        </p>

        <button type="button" className={s.btn} onClick={() => openModal()}>
          <CalendarDays size={20} />
          Book Their Free Hearing Test
        </button>

        <ul className={s.trust}>
          {TRUST.map((item) => (
            <li key={item}>
              <CheckCircle size={15} />
              {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
