"use client"
import { Star, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";


const reviews : Review[] = [
  {
    name: "Praphul Fernandis",
    city: "Delhi",
    text: "The staff was attentive and knowledgeable. The facility was clean. The range of hearing solutions ensured her needs were met. Truly a positive impression.",
    rating:5,
  },
  {
    name: "Kabir Peter MacDow",
    city: "Mumbai",
    text: "Three years with SFL — superb. The product is highest technical quality. Worked the first time, every time. Direct support from SFL has been equally superb. Highly recommend.",
    rating:4,
  },
  {
    name: "Archana Singh",
    city: "Lucknow",
    text: "Very satisfied with what they provided to my grandfather. I recommend SFL to anyone suffering from hearing loss — truly reliable.",
    rating:5,
  },
  {
    name: "Pankaj Thakur",
    city: "Chandigarh",
    text: "Sound for Life is excellent. Free home visit, fast service, trained audiologists. Dr. Mohana suggested the right hearing aid for my brother — he is happy now.",
    rating:4,
  },
  {
    name: "Ajit Kumar",
    city: "Jaipur",
    text: "Recently went there for ear checkup — got the best service AND the best price for my hearing aid. Highly recommend.",
    rating:4,
  },
  {
    name: "Sunita Verma",
    city: "Bengaluru",
    text: "I was nervous about hearing aids. The team made me comfortable and the trial convinced me. Now I enjoy talking to my grandchildren on phone again.",
    rating:5,
  },
];

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className={s.section}>
//       <div className={s.container}>

//         <div className={s.header}>
//           <span className={s.badge}>Real Stories</span>
//           <h2 className={s.title}>
//             Their lives changed.{" "}
//             <span className={s.titleAccent}>Yours can too.</span>
//           </h2>
//         </div>

//         <div className={s.grid}>
//           {TESTIMONIALS.map((t) => (
//             <div key={t.name} className={s.card}>

//               <div className={s.stars}>
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} size={16} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
//                 ))}
//               </div>

//               <p className={s.quote}>&ldquo;{t.text}&rdquo;</p>

//               <div className={s.author}>
//                 <div className={s.avatar}>{t.name.charAt(0)}</div>
//                 <div>
//                   <p className={s.authorName}>{t.name}</p>
//                   <p className={s.authorCity}>
//                     <MapPin size={12} style={{ display: "inline", marginRight: 3, verticalAlign: "middle" }} />
//                     {t.city}
//                   </p>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

type Review = {
  name: string
  city: string
  text: string
  rating: number
}

export default function Testimonials() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const onScroll = () => {
      const cardWidth = el.firstElementChild?.clientWidth ?? 0
      const gap = 14
      const index = Math.round(el.scrollLeft / (cardWidth + gap))
      setActiveIndex(index)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (i: number) => {
    const el = gridRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.clientWidth ?? 0
    el.scrollTo({ left: i * (cardWidth + 14), behavior: 'smooth' })
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Real Stories</span>
          <h2 className={styles.title}>
            Their lives changed.{' '}
            <span className={styles.titleAccent}>Yours can too.</span>
          </h2>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <div className={styles.stars}>{'★'.repeat(r.rating)}</div>
              <p className={styles.quote}>"{r.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.name[0]}</div>
                <div>
                  <div className={styles.authorName}>{r.name}</div>
                  <div className={styles.authorCity}>📍 {r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots — only visible on mobile via CSS */}
        <div className={styles.dotsWrapper}>
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.active : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
