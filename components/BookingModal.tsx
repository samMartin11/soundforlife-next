// "use client";

// import { createContext, useContext, useState } from "react";
// import { X, ArrowRight, Phone } from "lucide-react";
// import s from "./BookingModal.module.css";

// /* ── Booking context ─────────────────────────────────────────── */
// const Ctx = createContext<{ openModal: () => void }>({ openModal: () => {} });
// export const useBookingModal = () => useContext(Ctx);

// /* ── Callback context ────────────────────────────────────────── */
// const CallbackCtx = createContext<{ openCallback: () => void }>({ openCallback: () => {} });
// export const useCallbackModal = () => useContext(CallbackCtx);

// /* ── Provider (wrap the app with this) ───────────────────────── */
// export function BookingModalProvider({ children }: { children: React.ReactNode }) {
//   const [bookingOpen, setBookingOpen] = useState(false);
//   const [callbackOpen, setCallbackOpen] = useState(false);
//   return (
//     <Ctx.Provider value={{ openModal: () => setBookingOpen(true) }}>
//       <CallbackCtx.Provider value={{ openCallback: () => setCallbackOpen(true) }}>
//         {children}
//         {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
//         {callbackOpen && <CallbackModal onClose={() => setCallbackOpen(false)} />}
//       </CallbackCtx.Provider>
//     </Ctx.Provider>
//   );
// }

// /* ── Modal UI ────────────────────────────────────────────────── */
// function BookingModal({ onClose }: { onClose: () => void }) {
//   const [form, setForm] = useState({ name: "", phone: "", city: "", email: "" });
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <div className={s.backdrop} onClick={onClose}>
//       <div className={s.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
//         <button className={s.close} onClick={onClose} aria-label="Close">
//           <X size={20} />
//         </button>

//         {submitted ? (
//           <div className={s.success}>
//             <p className={s.successIcon}>✅</p>
//             <h3 className={s.successTitle}>You&apos;re booked!</h3>
//             <p className={s.successBody}>
//               An audiologist will call you within 30 minutes to schedule your free home visit.
//             </p>
//           </div>
//         ) : (
//           <>
//             <h2 className={s.title}>Book Your FREE Home Trial</h2>
//             <p className={s.subtitle}>
//               An audiologist will call you within 30 minutes to schedule.
//             </p>

//             <div className={s.bonusBox}>
//               <strong>Today&apos;s bonus:</strong> Free home visit + 7-day trial + ₹5,000 OFF + 3-Year warranty.
//             </div>

//             <form onSubmit={handleSubmit} className={s.form}>
//               <div className={s.field}>
//                 <label className={s.label} htmlFor="bm-name">Your Name *</label>
//                 <input
//                   id="bm-name"
//                   className={s.input}
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />
//               </div>

//               <div className={s.field}>
//                 <label className={s.label} htmlFor="bm-phone">Mobile Number *</label>
//                 <input
//                   id="bm-phone"
//                   className={s.input}
//                   type="tel"
//                   required
//                   placeholder="10-digit mobile"
//                   pattern="[6-9][0-9]{9}"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 />
//               </div>

//               <div className={s.field}>
//                 <label className={s.label} htmlFor="bm-city">City</label>
//                 <input
//                   id="bm-city"
//                   className={s.input}
//                   type="text"
//                   value={form.city}
//                   onChange={(e) => setForm({ ...form, city: e.target.value })}
//                 />
//               </div>

//               <div className={s.field}>
//                 <label className={s.label} htmlFor="bm-email">Email (optional)</label>
//                 <input
//                   id="bm-email"
//                   className={s.input}
//                   type="email"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//               </div>

//               <button type="submit" className={s.submitBtn}>
//                 Book Free Trial <ArrowRight size={18} />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ── Callback Modal ──────────────────────────────────────────── */
// function CallbackModal({ onClose }: { onClose: () => void }) {
//   const [form, setForm] = useState({ name: "", phone: "" });
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <div className={s.backdrop} onClick={onClose}>
//       <div className={s.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
//         <button className={s.close} onClick={onClose} aria-label="Close">
//           <X size={20} />
//         </button>

//         {submitted ? (
//           <div className={s.success}>
//             <p className={s.successIcon}>📞</p>
//             <h3 className={s.successTitle}>We&apos;ll call you soon!</h3>
//             <p className={s.successBody}>
//               Our audiologist will call you back within 30 minutes during business hours.
//             </p>
//           </div>
//         ) : (
//           <>
//             <h2 className={s.title}>Request a Call Back</h2>
//             <p className={s.subtitle}>
//               Leave your number and we&apos;ll call you back within 30 minutes.
//             </p>

//             <form onSubmit={handleSubmit} className={s.form}>
//               <div className={s.field}>
//                 <label className={s.label} htmlFor="cb-name">Your Name *</label>
//                 <input
//                   id="cb-name"
//                   className={s.input}
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />
//               </div>

//               <div className={s.field}>
//                 <label className={s.label} htmlFor="cb-phone">Mobile Number *</label>
//                 <input
//                   id="cb-phone"
//                   className={s.input}
//                   type="tel"
//                   required
//                   placeholder="10-digit mobile"
//                   pattern="[6-9][0-9]{9}"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 />
//               </div>

//               <button type="submit" className={s.submitBtn}>
//                 <Phone size={18} /> Request Call Back
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { createContext, useContext, useState } from "react";
import { X, ArrowRight, Phone } from "lucide-react";
import s from "./BookingModal.module.css";

/* ── Types ───────────────────────────────────────────────────── */
interface BookingModalOptions {
  title?: string;
  subtitle?: string;
  cta?: string;
}

/* ── Booking context ─────────────────────────────────────────── */
const Ctx = createContext<{ openModal: (opts?: BookingModalOptions) => void }>({ openModal: () => {} });
export const useBookingModal = () => useContext(Ctx);

/* ── Callback context ────────────────────────────────────────── */
const CallbackCtx = createContext<{ openCallback: () => void }>({ openCallback: () => {} });
export const useCallbackModal = () => useContext(CallbackCtx);

/* ── Provider ────────────────────────────────────────────────── */
export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [bookingOpts, setBookingOpts] = useState<BookingModalOptions>({});

  function openModal(opts?: BookingModalOptions) {
    setBookingOpts(opts ?? {});
    setBookingOpen(true);
  }

  return (
    <Ctx.Provider value={{ openModal }}>
      <CallbackCtx.Provider value={{ openCallback: () => setCallbackOpen(true) }}>
        {children}
        {bookingOpen && (
          <BookingModal
            onClose={() => setBookingOpen(false)}
            title={bookingOpts.title}
            subtitle={bookingOpts.subtitle}
            cta={bookingOpts.cta}
          />
        )}
        {callbackOpen && <CallbackModal onClose={() => setCallbackOpen(false)} />}
      </CallbackCtx.Provider>
    </Ctx.Provider>
  );
}

/* ── Modal UI ────────────────────────────────────────────────── */
function BookingModal({
  onClose,
  title    = "Book Your FREE Home Trial",
  subtitle = "An audiologist will call you within 30 minutes to schedule.",
  cta      = "Book Free Trial",
}: {
  onClose:   () => void;
  title?:    string;
  subtitle?: string;
  cta?:      string;
}) {
  const [form, setForm] = useState({ name: "", phone: "", city: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className={s.close} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className={s.success}>
            <p className={s.successIcon}>✅</p>
            <h3 className={s.successTitle}>You&apos;re booked!</h3>
            <p className={s.successBody}>
              An audiologist will call you within 30 minutes to schedule your free home visit.
            </p>
          </div>
        ) : (
          <>
            <h2 className={s.title}>{title}</h2>
            <p className={s.subtitle}>{subtitle}</p>

            <div className={s.bonusBox}>
              <strong>Today&apos;s bonus:</strong> Free home visit + 7-day trial + ₹5,000 OFF + 3-Year warranty.
            </div>

            <form onSubmit={handleSubmit} className={s.form}>
              <div className={s.field}>
                <label className={s.label} htmlFor="bm-name">Your Name *</label>
                <input id="bm-name" className={s.input} type="text" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="bm-phone">Mobile Number *</label>
                <input id="bm-phone" className={s.input} type="tel" required
                  placeholder="10-digit mobile" pattern="[6-9][0-9]{9}"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="bm-city">City</label>
                <input id="bm-city" className={s.input} type="text"
                  value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="bm-email">Email (optional)</label>
                <input id="bm-email" className={s.input} type="email"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>

              <button type="submit" className={s.submitBtn}>
                {cta} <ArrowRight size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Callback Modal — unchanged ──────────────────────────────── */
function CallbackModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className={s.close} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        {submitted ? (
          <div className={s.success}>
            <p className={s.successIcon}>📞</p>
            <h3 className={s.successTitle}>We&apos;ll call you soon!</h3>
            <p className={s.successBody}>
              Our audiologist will call you back within 30 minutes during business hours.
            </p>
          </div>
        ) : (
          <>
            <h2 className={s.title}>Request a Call Back</h2>
            <p className={s.subtitle}>Leave your number and we&apos;ll call you back within 30 minutes.</p>
            <form onSubmit={handleSubmit} className={s.form}>
              <div className={s.field}>
                <label className={s.label} htmlFor="cb-name">Your Name *</label>
                <input id="cb-name" className={s.input} type="text" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="cb-phone">Mobile Number *</label>
                <input id="cb-phone" className={s.input} type="tel" required
                  placeholder="10-digit mobile" pattern="[6-9][0-9]{9}"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <button type="submit" className={s.submitBtn}>
                <Phone size={18} /> Request Call Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}