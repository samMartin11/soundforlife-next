import { Star, MapPin } from "lucide-react";
import s from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    name: "Praphul Fernandis",
    city: "Delhi",
    text: "The staff was attentive and knowledgeable. The facility was clean. The range of hearing solutions ensured her needs were met. Truly a positive impression.",
  },
  {
    name: "Kabir Peter MacDow",
    city: "Mumbai",
    text: "Three years with SFL — superb. The product is highest technical quality. Worked the first time, every time. Direct support from SFL has been equally superb. Highly recommend.",
  },
  {
    name: "Archana Singh",
    city: "Lucknow",
    text: "Very satisfied with what they provided to my grandfather. I recommend SFL to anyone suffering from hearing loss — truly reliable.",
  },
  {
    name: "Pankaj Thakur",
    city: "Chandigarh",
    text: "Sound for Life is excellent. Free home visit, fast service, trained audiologists. Dr. Mohana suggested the right hearing aid for my brother — he is happy now.",
  },
  {
    name: "Ajit Kumar",
    city: "Jaipur",
    text: "Recently went there for ear checkup — got the best service AND the best price for my hearing aid. Highly recommend.",
  },
  {
    name: "Sunita Verma",
    city: "Bengaluru",
    text: "I was nervous about hearing aids. The team made me comfortable and the trial convinced me. Now I enjoy talking to my grandchildren on phone again.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <span className={s.badge}>Real Stories</span>
          <h2 className={s.title}>
            Their lives changed.{" "}
            <span className={s.titleAccent}>Yours can too.</span>
          </h2>
        </div>

        <div className={s.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={s.card}>

              <div className={s.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                ))}
              </div>

              <p className={s.quote}>&ldquo;{t.text}&rdquo;</p>

              <div className={s.author}>
                <div className={s.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <p className={s.authorName}>{t.name}</p>
                  <p className={s.authorCity}>
                    <MapPin size={12} style={{ display: "inline", marginRight: 3, verticalAlign: "middle" }} />
                    {t.city}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
