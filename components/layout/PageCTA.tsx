// "use client";

// import { Calendar, Phone } from "lucide-react";
// import { useBookingModal } from "@/components/BookingModal";
// import { useCallbackModal } from "@/components/BookingModal";

// export default function PageCTA() {
//   const { openModal } = useBookingModal();
//   const { openCallback } = useCallbackModal();

//   return (
//     <section style={{
//       background: "var(--color-navy)",
//       padding: "2.5rem 1.5rem",
//     }}>
//       <div style={{
//         maxWidth: "640px",
//         margin: "0 auto",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "1rem",
//         textAlign: "center",
//       }}>
//         <p style={{ color: "#cbd5e1", fontSize: "0.95rem", margin: 0 }}>
//           Ready to hear better? Our audiologists are here to help.
//         </p>

//         <div style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "0.875rem",
//           justifyContent: "center",
//           width: "100%",
//         }}>
//           <button
//             onClick={openModal}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "0.5rem",
//               background: "var(--color-primary)",
//               color: "#fff",
//               border: "none",
//               borderRadius: "0.75rem",
//               padding: "0.875rem 1.75rem",
//               fontSize: "1rem",
//               fontWeight: 700,
//               cursor: "pointer",
//               flex: "1 1 200px",
//               justifyContent: "center",
//               transition: "background 0.2s, transform 0.15s",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.background = "var(--color-primary-dark)";
//               (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.background = "var(--color-primary)";
//               (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
//             }}
//           >
//             <Calendar size={18} />
//             Book Appointment
//           </button>

//           <button
//             onClick={openCallback}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "0.5rem",
//               background: "transparent",
//               color: "#fff",
//               border: "2px solid rgba(255,255,255,0.3)",
//               borderRadius: "0.75rem",
//               padding: "0.875rem 1.75rem",
//               fontSize: "1rem",
//               fontWeight: 700,
//               cursor: "pointer",
//               flex: "1 1 200px",
//               justifyContent: "center",
//               transition: "border-color 0.2s, background 0.2s, transform 0.15s",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.7)";
//               (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
//               (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
//               (e.currentTarget as HTMLButtonElement).style.background = "transparent";
//               (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
//             }}
//           >
//             <Phone size={18} />
//             Request Call Callback
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
