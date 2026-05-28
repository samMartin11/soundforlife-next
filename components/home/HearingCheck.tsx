"use client";

import { useState } from "react";
import Link from "next/link";
import { useBookingModal,useCallbackModal } from "../BookingModal";
import { ArrowRight, Repeat2, Tv, Users, VolumeX, Bell, CalendarX } from "lucide-react";
import styles from "./HearingCheck.module.css";
import {Calendar} from "lucide-react";

/* ── Data ────────────────────────────────────────────────────── */

//const {openModal} = useBookingModal();

const QUESTIONS = [
  { text: "Do you often ask people to repeat what they said?",                    icon: Repeat2    },
  { text: "Do family members complain that the TV is too loud?",                  icon: Tv         },
  { text: "Do you struggle to follow conversations in noisy places?",             icon: Users      },
  { text: "Do voices sound muffled, especially women & children?",                icon: VolumeX    },
  { text: "Do you experience ringing or buzzing in your ears (tinnitus)?",        icon: Bell       },
  { text: "Do you avoid social gatherings because hearing has become tiring?",    icon: CalendarX  },
];

const OPTIONS = ["Never", "Sometimes", "Often", "Always"];

const SCORE: Record<string, number> = { Never: 0, Sometimes: 1, Often: 2, Always: 3 };

function getResult(score: number) {
  if (score <= 4) return {
    icon: "✅",
    title: "Your hearing seems fine!",
    body: "Your responses suggest your hearing is in good shape. We still recommend a free annual check-up — it takes just 20 minutes at home.",
    cta: "Book a Free Check-up Anyway",
  };
  if (score <= 10) return {
    icon: "⚠️",
    title: "Mild signs of hearing difficulty",
    body: "You may be experiencing early-stage hearing loss. A free home evaluation can give you clarity — no cost, no commitment.",
    cta: "Book My Free Hearing Test Now",
  };
  return {
    icon: "🔔",
    title: "You may have significant hearing difficulty",
    body: "Your responses indicate notable hearing challenges. Our audiologist can visit your home for a complete assessment and a free 7-day trial — at zero cost.",
    cta: "Book An Audiologist Appointment Now",
  };
}

/* ── Component ───────────────────────────────────────────────── */
export default function HearingCheck() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone]       = useState(false);
  const { openModal } = useBookingModal();

  const currentAnswer = answers[step];
  const isLast        = step === QUESTIONS.length - 1;
  const totalScore    = answers.reduce((sum, a) => sum + (SCORE[a] ?? 0), 0);
  const result        = getResult(totalScore);
  const pct           = Math.round((step / QUESTIONS.length) * 100);
  const QuestionIcon  = QUESTIONS[step]?.icon;

  return (
    <section id="hearing-test" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            🎧 Free &middot; No Sign-up &middot; 60 Seconds
          </div>
          <h2 className={styles.headline}>
            Take the <span className={styles.headlineAccent}>Hearing Health Check</span>
          </h2>
          <p className={styles.subtitle}>
            Answer {QUESTIONS.length} simple questions. Get your personalized
            <br />hearing score instantly — backed by audiologists.
          </p>
        </div>

        {/* Card */}
        <div className={styles.card}>

          {!done ? (
            <>
              {/* Progress */}
              <div className={styles.progressRow}>
                <span className={styles.stepLabel}>Question {step + 1} of {QUESTIONS.length}</span>
                <span className={styles.pct}>{pct}% complete</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${pct}%` }} />
              </div>

              {/* Question */}
              <div className={styles.questionWrap}>
                {QuestionIcon && (
                  <div className={styles.questionIcon}>
                    <QuestionIcon size={26} />
                  </div>
                )}
                <p className={styles.question}>{QUESTIONS[step].text}</p>
              </div>

              {/* Options */}
              <div className={styles.options}>
                {OPTIONS.map((opt) => {
                  const isSelected = currentAnswer === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`${styles.option} ${isSelected ? styles.optionSelected : ""}`}
                      onClick={() =>
                        setAnswers((prev) => {
                          const next = [...prev];
                          next[step] = opt;
                          return next;
                        })
                      }
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Next button */}
              <button
                type="button"
                className={styles.nextBtn}
                onClick={() => isLast ? setDone(true) : setStep((n) => n + 1)}
                disabled={!currentAnswer}
              >
                {isLast ? "See My Result" : "Next"} <ArrowRight size={18} />
              </button>
            </>
          ) : (
            /* Result screen */
            <div className={styles.result}>
              <div className={styles.resultIcon}>{result.icon}</div>
              <p className={styles.resultTitle}>{result.title}</p>
              <p className={styles.resultBody}>{result.body}</p>
              <button 
                className={styles.resultCta}
                onClick={() => openModal()}>
                {result.cta} <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className={styles.retake}
                onClick={() => { setStep(0); setAnswers([]); setDone(false); }}
              >
                Retake the check
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
