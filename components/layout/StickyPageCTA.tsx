'use client';

import {useState, useEffect} from "react";
import {Calendar, Phone, X} from "lucide-react";
import { useBookingModal, useCallbackModal } from "@/components/BookingModal";
import {usePathname} from "next/navigation";

export default function StickyPageCTA() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const { openModal } = useBookingModal();
    const { openCallback } = useCallbackModal();
    const pathname = usePathname();
    
    useEffect(() => {
        setVisible(false);
        setDismissed(false);
        const timer = setTimeout(() => {
            setVisible(true);
        }, 10000);
    }, [pathname]);

    if(!visible || dismissed) return null;
    
    return (
            <div
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
                    animation: 'slideUp 0.4s ease',
                }}
            >
                <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>

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
                        {/* Book Appointment — same as PageCTA */}
                        <button
                            onClick={() =>openModal()}
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

                        {/* Request Call Callback — same as PageCTA */}
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

                {/* Dismiss button */}
                <button
                    onClick={() => setDismissed(true)}
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