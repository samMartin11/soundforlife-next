'use client';

import { useState, useEffect, useRef } from "react";
import { Calendar, Phone, X } from "lucide-react";
import { useBookingModal, useCallbackModal } from "@/components/BookingModal";
import { usePathname } from "next/navigation";

export default function StickyPageCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { openModal } = useBookingModal();
  const { openCallback } = useCallbackModal();
  const pathname = usePathname();
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismissedRef = useRef(false);

  const clearTimer = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
  };

  const startTimer = () => {
    clearTimer();
    idleTimer.current = setTimeout(() => {
      if (!dismissedRef.current) setVisible(true);
    }, 5000);
  };

  const onScroll = () => {
    if (dismissedRef.current) return;
    setVisible(false);
    startTimer();
  };

  const onActivity = (e: Event) => {
    if (dismissedRef.current) return;
    if (e.type === 'click' && e.target instanceof Node) {
      const cta = document.getElementById('sticky-cta');
      if (cta?.contains(e.target as Node)) return;
    }
    setVisible(false);
    startTimer();
  };

  const handleDismiss = () => {
    dismissedRef.current = true;
    setDismissed(true);
    setVisible(false);
    clearTimer();
    window.removeEventListener('scroll', onScroll);
    const activityEvents = ['keydown', 'touchstart', 'click'];
    activityEvents.forEach((e) => window.removeEventListener(e, onActivity));
  };

  useEffect(() => {
      if (pathname !== "/book-appointment") {
          console.log("Pathname changed:", pathname);
          dismissedRef.current = false;
          setDismissed(false);
          setVisible(false);
          startTimer();
      }

    const activityEvents = ['keydown', 'touchstart', 'click'];
    window.addEventListener('scroll', onScroll, { passive: true });
    activityEvents.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));

    return () => {
      clearTimer();
      window.removeEventListener('scroll', onScroll);
      activityEvents.forEach((e) => window.removeEventListener(e, onActivity));
    };
  }, [pathname]);

  return (
     <div
      id="sticky-cta"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: 'var(--color-navy)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '1.25rem 1.5rem',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.35s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
      }}>
        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: 0 }}>
          Ready to hear better? Our audiologists are here to help.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.875rem',
          justifyContent: 'center',
          width: '100%',
        }}>
          <button
            onClick={() => openModal()}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--color-primary)', color: '#fff',
              border: 'none', borderRadius: '0.75rem',
              padding: '0.875rem 1.75rem', fontSize: '1rem',
              fontWeight: 700, cursor: 'pointer',
              flex: '1 1 200px', justifyContent: 'center',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-primary-dark)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Calendar size={18} />
            Book Appointment
          </button>

          <button
            onClick={openCallback}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: '#fff',
              border: '2px solid rgba(255,255,255,0.3)', borderRadius: '0.75rem',
              padding: '0.875rem 1.75rem', fontSize: '1rem',
              fontWeight: 700, cursor: 'pointer',
              flex: '1 1 200px', justifyContent: 'center',
              transition: 'border-color 0.2s, background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Phone size={18} />
            Request Call Callback
          </button>
        </div>
      </div>

      <button
        onClick={handleDismiss}
        aria-label="Dismiss"
        style={{
          position: 'absolute', top: '0.75rem', right: '1rem',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.4)', padding: '4px',
          lineHeight: 1,
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
      >
        <X size={18} />
      </button>
    </div>
  );
   
}