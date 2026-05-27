import Image from "next/image";
import { Star } from "lucide-react";
import s from "./ClientResults.module.css";

const RESULTS = [
  { label: "Hear friends & family better",        pct: 99 },
  { label: "Hear better at work",                 pct: 98 },
  { label: "Enjoy TV without volume wars",        pct: 97 },
  { label: "Follow conversations in restaurants", pct: 96 },
  { label: "Some relief from tinnitus",           pct: 90 },
];

export default function ClientResults() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>

          {/* Image */}
          <div className={s.imageWrapper}>
            <Image
              src="https://picsum.photos/seed/happyelderly/600/450"
              alt="Happy client after hearing aid trial"
              width={600}
              height={450}
              className={s.image}
            />
            <div className={s.quoteCard}>
              <div className={s.quoteStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                ))}
              </div>
              <p className={s.quoteText}>
                &ldquo;Dr. Mohana was incredibly patient. My father heard us at dinner — for the first time in years.&rdquo;
              </p>
              <p className={s.quoteAuthor}>— Pankaj T., Delhi</p>
            </div>
          </div>

          {/* Stats */}
          <div className={s.content}>
            <span className={s.label}>Proven Results</span>
            <h2 className={s.heading}>
              After their trial, our clients report:
            </h2>
            <p className={s.subtitle}>Real numbers. Real lives. Verified outcomes.</p>

            <div className={s.bars}>
              {RESULTS.map((r) => (
                <div key={r.label} className={s.barItem}>
                  <div className={s.barHeader}>
                    <span className={s.barLabel}>{r.label}</span>
                    <span className={s.barPct}>{r.pct}%</span>
                  </div>
                  <div className={s.track}>
                    <div className={s.fill} style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
