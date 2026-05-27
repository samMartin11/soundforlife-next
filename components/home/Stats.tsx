import s from "./Stats.module.css";

const STATS = [
  { value: "50,000+", label: "Lives Transformed" },
  { value: "10+ Yrs", label: "PAN India Presence" },
  { value: "50+",     label: "Clinics Nationwide" },
  { value: "4.9★",   label: "Google Rating" },
];

export default function Stats() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>
          {STATS.map((stat) => (
            <div key={stat.value} className={s.stat}>
              <p className={s.value}>{stat.value}</p>
              <p className={s.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
