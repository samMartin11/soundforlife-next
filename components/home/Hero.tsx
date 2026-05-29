"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Calendar, Mic, ShieldCheck, Home, BadgeCheck, TrendingUp, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useBookingModal } from "@/components/BookingModal";
import s from "./Hero.module.css";

const slides = [
  { src: "/Hero_image_1.jpeg", alt: "Happy elderly couple with family" },
  { src: "/Hero_image_2.jpeg", alt: "Audiologist visiting a senior at home" },
  { src: "/Hero_image_3.jpeg", alt: "Senior enjoying better hearing with family" },
];

export default function Hero() {
  const { openModal } = useBookingModal();
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -40) next();
    else if (delta > 40) prev();
    touchStartX.current = null;
  }

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>

          {/* ── Left: copy ── */}
          <div className={s.content}>

            {/* <span className={s.badge}>
              <Star size={13} /> India&apos;s #1 Multi-Brand Hearing Network · 10+ Years
            </span> */}
            <div className={s.badgeWrapper}>
              <span className={s.badgePulse} />
              <span className={s.badgeIcon}><Star size={12} fill="#f0a500" color="#f0a500" /></span>
              <span className={s.badgeText}>India&apos;s #1 Multi-Brand Hearing Network</span>
              <span className={s.badgeDivider} />
              <span className={s.badgeHighlight}>10+ Years</span>
            </div>

            <h1 className={s.headline}>
              Hear your <span className={s.highlightTeal}>grandchild&apos;s</span>
              <br />
              <span className={s.highlightTeal}>laugh</span> again.
              <br />
              <span className={s.highlightOrange}>In 7 days. From home.</span>
            </h1>

            <p className={s.body}>
              You&apos;re not alone — 1 in 4 Indians over 50 has hearing loss,
              but only 8% seek help. Don&apos;t let another family dinner pass in
              silence. Try premium hearing aids <strong>free for 7 days</strong>, at your home.
            </p>

            <div className={s.actions}>
              <button type="button" className={s.btnPrimary} onClick={() =>openModal()}>
                <Calendar size={17} /> Book Home Trial
              </button>
              <Link href="/#hearing-test" className={s.btnOutline}>
                <Mic size={17} /> Take 60-Sec Hearing Test
              </Link>
            </div>

            <div className={s.trustRow}>
              <span className={s.trustItem}><ShieldCheck size={15} /> 100% Risk-Free Trial</span>
              <span className={s.trustItem}><Home size={15} /> Home Visit Available</span>
              <span className={s.trustItem}><BadgeCheck size={15} /> Certified Audiologists</span>
            </div>

            <div className={s.rating}>
              <div className={s.avatars}>
                {["😊", "😄", "🙂", "😃", "😁"].map((emoji, i) => (
                  <span key={i} className={s.avatar}>{emoji}</span>
                ))}
              </div>
              <div className={s.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                ))}
              </div>
              <span className={s.ratingValue}>4.9/5</span>
              <span className={s.ratingLabel}>Trusted by <strong>50,000+</strong> happy hearers</span>
            </div>
          </div>
          

          {/* ── Right: carousel ── */}
          <div className={s.imageWrapper}>

            <div className={s.floatingBadgeTop}>
              <div className={s.badgeIconGreen}><TrendingUp size={16} /></div>
              <div>
                <p className={s.badgeSubtitle}>Booked today</p>
                <p className={s.badgeTitle}>17 consultations</p>
              </div>
            </div>

            <div
              className={s.carousel}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`${s.slide} ${i === current ? s.slideActive : ""}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={s.image}
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* <button type="button" className={`${s.carouselBtn} ${s.carouselBtnPrev}`} onClick={prev} aria-label="Previous image">
                <ChevronLeft size={20} />
              </button>
              <button type="button" className={`${s.carouselBtn} ${s.carouselBtnNext}`} onClick={next} aria-label="Next image">
                <ChevronRight size={20} />
              </button> */}

              <div className={s.dots}>
                {slides.map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    className={`${s.dot} ${i === current ? s.dotActive : ""}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className={s.realMomentOverlay}>
              <p className={s.realMomentLabel}>REAL MOMENT</p>
              <p className={s.realMomentQuote}>&ldquo;I heard her first words again.&rdquo;</p>
            </div>

            <div className={s.floatingBadgeBottom}>
              <div className={s.badgeIconAmber}><Award size={16} /></div>
              <div>
                <p className={s.badgeSubtitle}>Success rate</p>
                <p className={s.badgeTitle}>99% better hearing</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
